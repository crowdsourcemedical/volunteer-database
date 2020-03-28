from fastapi import APIRouter
from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from .. import skillCrud, schemas
from ..database import get_db
from typing import List


router = APIRouter()


@router.post("/skills/", response_model=schemas.Skill)
def create_skill(skill_input: schemas.Skill, db: Session = Depends(get_db)):
    db_skill = skillCrud.get_skill_by_name(db, skill_name=skill_input.skill_name)
    if db_skill:
        raise HTTPException(status_code=400, detail="Skill is already exists!")
    return skillCrud.create_skill(db=db, skill=skill_input)


@router.get("/skills/", response_model=List[schemas.Skill])
def read_skills(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    skills = skillCrud.get_skills(db, skip=skip, limit=limit)
    return skills

# @router.get("/skills/{skill_id}", response_model=schemas.User)
# def read_skill(user_id: int, db: Session = Depends(get_db)):
#     # db_user = crud.get_user(db, user_id=user_id)
#     # if db_user is None:
#     #     raise HTTPException(status_code=404, detail="Skill for that Skill ID not found")
#     # return db_user



