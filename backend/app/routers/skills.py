from typing import List

from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..database import get_db

router = APIRouter()


@router.post("/skills/", response_model=schemas.User)
def create_skill(user: schemas.UserCreate, db: Session = Depends(get_db)):
    # db_user = crud.get_skill_by_name(db, create_skill=user.user_email)
    # if db_user:
    #     raise HTTPException(status_code=400, detail="Skill is already exists!")
    # return crud.create_user(db=db, user=user)


@router.get("/skills/{skill_id}", response_model=schemas.User)
def read_skill(user_id: int, db: Session = Depends(get_db)):
    # db_user = crud.get_user(db, user_id=user_id)
    # if db_user is None:
    #     raise HTTPException(status_code=404, detail="Skill for that Skill ID not found")
    # return db_user


@router.get("/skills/", response_model=List[schemas.User])
def read_skills(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # users = crud.get_users(db, skip=skip, limit=limit)
    # return users
