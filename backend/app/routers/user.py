from typing import List

from fastapi import Depends, HTTPException, APIRouter, status
from fastapi.responses import JSONResponse, Response
from sqlalchemy.orm import Session

from .. import auth, crud, models, schemas
from ..database import get_db


router = APIRouter()


@router.get("/", response_model=List[int])
def get_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """Endpoint to get a list of user ids."""
    return [user.user_id for user in crud.get_users(db, skip=skip, limit=limit)]


@router.get("/{user_id}", response_model=schemas.User)
def get_user(user_id: int, db: Session = Depends(get_db)):
    """Endpoint to get a user's info by id.

    Warnings:
        Need security on this endpoint.
    """
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@router.post("/")
def create_user(data: schemas.UserCreate, db: Session = Depends(get_db)):
    """Endpoint to create a new user.

    Warnings:
        Need rate limiting on this endpoint"""
    db_user = crud.get_user_by_email(db, user_email=data.user_email)
    if db_user:
        raise HTTPException(
            status_code=400, detail="Email is already registered")
    new_user = crud.create_user(db, data)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content={
        "user_id": new_user.user_id
    })
