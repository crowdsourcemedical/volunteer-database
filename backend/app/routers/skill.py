from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from .. import skill_crud, schemas
from ..database import get_db
from typing import List
from .. import constants


router = APIRouter()


@router.post("/", response_model=schemas.Skill)
def create_skill(skill_input: schemas.SkillUpdateCreate, db: Session = Depends(get_db)):
    db_skill = skill_crud.get_skill_by_name(db, skill_name=skill_input.skill_name)
    if db_skill:
        raise HTTPException(status_code=400, detail=constants.ALREADY_EXISTS_ERROR)
    return skill_crud.create_skill(db=db, skill=skill_input)


@router.get("/", response_model=List[schemas.SkillBase])
def read_skills(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    skills = skill_crud.get_skills(db, skip=skip, limit=limit)
    return skills


@router.get("/{skill_id}", response_model=schemas.Skill)
def read_skill(skill_id: int, db: Session = Depends(get_db)):
    db_skill = skill_crud.get_skill_by_id(db, skill_id=skill_id)
    if db_skill is None:
        raise HTTPException(status_code=404, detail=constants.SKILL_ID_NOT_FOUND)
    return db_skill


@router.put("/{skill_id}", response_model=schemas.Skill)
def update_skill(skill_id: int, skill_input: schemas.SkillUpdateCreate, db: Session = Depends(get_db)):
    db_skill = skill_crud.update_skill(db, old_skill_id=skill_id, patch_object=skill_input)
    if db_skill is None:
        raise HTTPException(status_code=404, detail=constants.SKILL_ID_NOT_FOUND)
    else:
        return db_skill


@router.delete("/{skill_id}", response_model=int)
def delete_skill(skill_id: int, db: Session = Depends(get_db)):
    db_skill = skill_crud.delete_skill(db, del_skill_id=skill_id)
    if db_skill is None:
        raise HTTPException(status_code=404, detail=constants.SKILL_ID_NOT_FOUND)
    else:
        return db_skill
