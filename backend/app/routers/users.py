from typing import List

from fastapi import FastAPI, Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware

from .. import crud, models, schemas
from ..utils import verify_password
from ..database import SessionLocal, engine, get_db


CSM_router = APIRouter()




@CSM_router.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, user_email=user.user_email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email is already registered!")
    return crud.create_user(db=db, user=user)


@CSM_router.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@CSM_router.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@CSM_router.post("/users/login")
def login(web_user: schemas.Login, db: Session = Depends(get_db)):
    user = crud.get_user_by_email(db, user_email=web_user.email)
    if user:
        right_password = verify_password(user.user_hashed_password, web_user.password)
    else:
        raise HTTPException(status_code=404, detail="User doesn't exist")
    return right_password