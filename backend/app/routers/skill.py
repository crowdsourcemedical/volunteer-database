from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session

from app.crud import skill as crud_skill
from app.database import get_db
from app.schemas.skill import SkillInDB, SkillUpdate, SkillCreate

router = APIRouter()


@router.get("/", response_model=SkillInDB)
def get_skills(db: Session = Depends(get_db)):
    return crud_skill.get_all(db)


@router.get("/{skill_id}", response_model=SkillInDB)
def get_skill(skill_id: int, db: Session = Depends(get_db)):
    return crud_skill.get(db, skill_id)


@router.post("/", response_model=SkillInDB)
def create_skill(payload: SkillCreate, db: Session = Depends(get_db)):
    return crud_skill.post(db, payload)


@router.put("/{skill_id}", response_model=SkillInDB)
def update_skill(payload: SkillUpdate, skill_id: int, db: Session = Depends(get_db)):
    existing_skill = crud_skill.get(db, skill_id=skill_id)
    if not existing_skill:
        raise HTTPException(status_code=404)

    updated_skill = crud_skill.put(db, skill_id, payload)
    return updated_skill


@router.delete("/{skill_id}", response_model=SkillInDB)
def delete_skill(skill_id: int, db: Session = Depends(get_db)):
    return crud_skill.delete(db, skill_id)
