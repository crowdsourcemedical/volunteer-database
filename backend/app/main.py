from fastapi import FastAPI, Depends
from fastapi.exceptions import HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware
from starlette.status import HTTP_400_BAD_REQUEST

from . import crud, models
from .auth import create_access_token, decode_token
from .database import engine, get_db


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
oauth2_schema = OAuth2PasswordBearer(tokenUrl="/token")

models.Base.metadata.create_all(bind=engine)


async def get_current_user(
    token: str = Depends(oauth2_schema),
    db: Session = Depends(get_db)
) -> models.User:
    """Get a user for the token that"s passed in via HTTP headers.

    This method gets the user's token through a `Depends` and processeses it
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


@app.post("/token")
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
) -> dict:
    """Endpoint: log in a user

    Args:
        form_data: login form submission data
        db: database connection

    Returns:
        The generated OAuth token information
    """
    user = crud.check_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=HTTP_400_BAD_REQUEST,
            detail="Incorrect username or password"
        )
    return {
        "access_token": create_access_token(data=user),
        "token_type": "bearer"
    }


@app.get("/token/verify")
async def token_verify(user: models.User = Depends(get_current_user)) -> dict:
    """Return the user's information to them."""
    return user.to_dict()


@app.get("/")
async def root():
    return {"message": "This is the root of the API. Please go to site.com/docs to see the documentation"}
