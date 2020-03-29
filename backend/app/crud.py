from datetime import datetime
from typing import List, Optional

from sqlalchemy.orm import Session

from . import models, schemas
from .auth import hash_password, verify_password


def get_user(db: Session, user_id: int) -> models.User:
    """Return the first user that has the matching id."""
    return db.query(models.User).filter(models.User.user_id == user_id).first()


def get_user_by_email(db: Session, user_email: str) -> models.User:
    """Return the first user that has the matching email."""
    return db.query(models.User).filter(models.User.user_email == user_email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100) -> List[models.User]:
    """Return all users, making use of batching.

    Args:
        db: database connection
        skip: offset from the start (default 0)
        limit: how many to retrieve (default 100)

    Returns:
        List of users
    """
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, data: schemas.UserCreate):
    """Create a new user."""
    password = data.user_password
    hashedpass = hash_password(password)
    db_user = models.User(
        user_email=data.user_email,
        user_first=data.user_first,
        user_last=data.user_last,
        user_hashed_password=hashedpass,
        user_location=data.user_location,
        user_description=data.user_description,
        user_profile_picture=data.user_profile_picture,
        user_is_active=True,
        user_is_admin=data.user_is_admin,
        user_last_login=datetime.now(),
        user_is_medical_professional=data.user_is_medical_professional,
        user_is_verified=False,
        user_registered_date=datetime.now(),
        user_skill=data.user_skill,
        user_is_volunteer=data.user_is_volunteer


    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def check_user(db: Session, email: str, password: str) -> Optional[models.User]:
    """Check if the email and password match what's in the database.

    Args:
        db: database connection
        email: email of the user to check
        password: password to check against

    Returns:
        User if the password matches, otherwise None
    """
    from_db = get_user_by_email(db, email)
    if not from_db:
        return None
    if verify_password(from_db.user_hashed_password, password):
        return from_db
    return None
