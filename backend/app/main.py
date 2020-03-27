from fastapi import FastAPI, Depends
from fastapi.exceptions import HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware
from starlette.status import HTTP_400_BAD_REQUEST

from . import crud, models
from .auth import create_access_token, get_current_user
from .database import engine, get_db
from .routers import position, project, skill, user


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(position.router)
app.include_router(project.router)
app.include_router(skill.router)
app.include_router(user.router)

models.Base.metadata.create_all(bind=engine)


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
    # form_data.username will need to be the email the user signed up with. user_email is a str
    user = crud.check_user(db, form_data.username, form_data.password)  # Shadows name user from outer scope
    if not user:
        raise HTTPException(
            status_code=HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )
    return {
        "access_token": create_access_token(data=user),
        "token_type": "bearer"
    }


@app.get("/token/verify")
async def token_verify(user: models.User = Depends(get_current_user)) -> dict:  # Shadows name user from outer scope
    """Return the user's information to them."""
    return user.to_dict_for_jwt()


@app.get("/")
async def root():
    """Return a simple welcome message."""
    return {"message": "This is the root of the API. Please go to /docs to see the documentation"}
