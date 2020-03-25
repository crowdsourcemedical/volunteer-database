from datetime import datetime, timedelta

from fastapi.exceptions import HTTPException
import jwt
from jwt import PyJWTError
from sqlalchemy.orm import Session
from starlette.status import HTTP_401_UNAUTHORIZED

from . import crud, models


JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_MINUTES = 30
JWT_SECRET = "TEST_VALUE_PLEASE_CHANGE"  # TODO need to load this from somewhere


def create_access_token(*, data: models.User, expires_delta: timedelta = None) -> bytes:
    """Create an access token for the user's login.

    Args:
        data: the user to create the token for
        expires_delta: optional override for
            the duration of the token

    Returns:
        JWT
    """
    to_encode = data.to_dict()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(JWT_EXPIRATION_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, JWT_SECRET, JWT_ALGORITHM)


def decode_token(token: str, db: Session) -> models.User:
    """Returns the user for the token.

    Args:
        token: JWT
        db: database connection

    Returns:
        User for the token

    Raises:
        Exception if the token couldn't be decoded or didn't match a user
    """
    credentials_exception = HTTPException(
        status_code=HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"}
    )
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user_id: int = payload.get("user_id")
        if not user_id:
            raise credentials_exception
    except PyJWTError:
        raise credentials_exception
    user = crud.get_user(db, user_id)
    if not user:
        raise credentials_exception
    return user
