from typing import List

from sqlalchemy.orm import Session

from app.models import Skill
from app.schemas.skill import SkillCreate, SkillUpdate


def get(db: Session, skill_id: int) -> Skill:
    return db.query(Skill).where(Skill.skill_id == skill_id).all()


def get_all(db: Session, skip: int = 0, limit: int = 100) -> List[Skill]:
    return db.query(Skill).offset(skip).limit(limit).all()


def post(db: Session, payload: SkillCreate) -> Skill:
    db_skill = Skill(**payload.dict())
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill


def put(db: Session, skill_id: int, payload: SkillUpdate):
    db_skill = Skill(**payload.dict())
    db_skill.skill_id = skill_id
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill


def delete(db: Session, skill_id: int):
    return db.delete(Skill).where(Skill.skill_id == skill_id)
