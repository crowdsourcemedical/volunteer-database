from sqlalchemy.orm import Session
from datetime import datetime
from . import models, schemas


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.user_id == user_id).first()


def get_user_by_email(db: Session, user_email: str):
    return db.query(models.User).filter(models.User.user_email == user_email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    hashedpass = user.user_hashed_password
    db_user = models.User(user_email=user.user_email, user_first=user.user_first, user_last=user.user_last, username=user.username, user_hashed_password=hashedpass, is_active=user.is_active, is_verified=user.is_verified, user_skill=user.user_skill, user_description=user.user_description, user_location=user.user_location, user_last_login=datetime.now())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user