from typing import List

from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session

from .. import crud, schemas
from ..database import get_db


router = APIRouter()


@router.get("/users/", response_model=List[int])
def get_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return [user.user_id for user in crud.get_users(db, skip=skip, limit=limit)]


@router.get("/users/{user_id}", response_model=schemas.User)
def get_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@router.post("/users/", response_model=schemas.UserCreate)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    # TODO need rate limiting on this endpoint
    db_user = crud.get_user_by_email(db, user_email=user.user_email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email is already registered")
    return crud.create_user(db=db, user=user)
