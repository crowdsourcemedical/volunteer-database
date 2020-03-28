from datetime import datetime
from typing import List, Optional
from sqlalchemy.orm import Session
from . import models, schemas


def create_skill(db: Session, skill: schemas.Skill):
    """Create a new skill."""
    db_skill = models.Skill(
        skill_name=skill.skill_name,
        category=skill.category
    )
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill


def get_skill_by_name(db: Session, skill_name: str) -> models.Skill:
    """Return the first user that has the matching email."""
    return db.query(models.Skill).filter(models.Skill.skill_name == skill_name).first()


def get_skills(db: Session, skip: int = 0, limit: int = 100) -> List[models.Skill]:
    """Return all users, making use of batching.

    Args:
        skip: offset from the start (default 0)
        limit: how many to retrieve (default 100)

    Returns:
        List of users
    """
    return db.query(models.Skill).offset(skip).limit(limit).all()


# def get_skill_by_id(db: Session, skill_id: int) -> models.Skill:
#     """Return the first user that has the matching id."""
#     return db.query(models.Skill).filter(models.Skill.skill_id == skill_id).first()





# def check_skill(db: Session, name: str, password: str) -> Optional[models.User]:
#     """Check if the name and password match what's in the database.
#     Args:
#         db: database connection
#         name: name of the user to check
#         password: password to check against

#     Returns:
#         User if the password matches, otherwise None
#     """
#     from_db = get_user_by_name(db, name)
#     if not from_db:
#         return None
#     if verify_password(from_db.user_hashed_password, password):
#         return from_db
#     return None
