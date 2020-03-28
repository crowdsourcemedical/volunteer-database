from datetime import datetime, timedelta

from fastapi import Depends
from fastapi.exceptions import HTTPException
from fastapi.security import OAuth2PasswordBearer
import jwt
from jwt import PyJWTError
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from starlette.status import HTTP_401_UNAUTHORIZED

from . import crud, models, jwt_secret
from .database import get_db


JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_MINUTES = 30
JWT_SECRET = jwt_secret.get_jwt_key()  # Added openssl rand 256 | base64


oauth2_schema = OAuth2PasswordBearer(tokenUrl="/token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> bytes:
    """Hash a password, making it safe for storage."""
    return pwd_context.hash(password)


def verify_password(stored_password: bytes, password: str) -> bool:
    """Check if the stored password matches the hash of the password to check."""
    try:
        return pwd_context.verify(password, stored_password)
    except Exception as e:
        print(f'Exception checking password: {e}')
        return False


def create_access_token(*, data: models.User, expires_delta: timedelta = None) -> bytes:
    """Create an access token for the user's login.

    Args:
        data: the user to create the token for
        expires_delta: optional override for
            the duration of the token

    Returns:
        JWT
    """
    to_encode = data.to_dict_for_jwt()
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


async def get_current_user(
    token: str = Depends(oauth2_schema),
    db: Session = Depends(get_db)
) -> models.User:
    """Get a user for the token that"s passed in via HTTP headers.

    This method gets the user's token through a `Depends` and processes it
    into a `models.User` object (if it's valid).

    Args:
        token: user's session token ('Authorization' header)
        db: database connection

    Returns:
        models.User: user for the token

    Raises:
        Exception if the token couldn't be decoded or didn't match a user
    """
    return decode_token(token, db)
