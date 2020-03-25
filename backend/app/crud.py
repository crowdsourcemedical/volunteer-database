from datetime import datetime
from typing import List, Optional

from passlib.context import CryptContext
from sqlalchemy.orm import Session

from . import models, schemas


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> bytes:
    """Hash a password, making it safe for storage."""
    return pwd_context.hash(password)


def verify_password(stored_password: bytes, password: str) -> bool:
    """Check if the stored password matches the hash of the password to check."""
    try:
        return pwd_context.verify(password, stored_password)
    except Exception as e:
        print(f'Exception checking password: {e}')
        return False


def get_user(db: Session, user_id: int) -> models.User:
    """Return the first user that has the matching id."""
    return db.query(models.User).filter(models.User.user_id == user_id).first()


def get_user_by_email(db: Session, user_email: str) -> models.User:
    """Return the first user that has the matching email."""
    return db.query(models.User).filter(models.User.user_email == user_email).first()


def get_user_by_name(db: Session, username: str) -> models.User:
    """Return the first user that has the matching name."""
    return db.query(models.User).filter(models.User.username == username).first()


def get_users(db: Session, skip: int = 0, limit: int = 100) -> List[models.User]:
    """Return all users, making use of batching.

    Args:
        skip: offset from the start (default 0)
        limit: how many to retrieve (default 100)

    Returns:
        List of users
    """
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    """Create a new user."""
    password = user.password
    hashedpass = hash_password(password)
    db_user = models.User(
        user_email=user.user_email,
        user_first=user.user_first,
        user_last=user.user_last,
        username=user.username,
        user_hashed_password=hashedpass,
        is_active=user.is_active,
        is_verified=user.is_verified,
        user_skill=user.user_skill,
        user_description=user.user_description,
        user_location=user.user_location,
        user_last_login=datetime.now()
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def check_user(db: Session, name: str, password: str) -> Optional[models.User]:
    """Check if the name and password match what's in the database.

    Args:
        db: database connection
        name: name of the user to check
        password: password to check against

    Returns:
        User if the password matches, otherwise None
    """
    from_db = get_user_by_name(db, name)
    if not from_db:
        return None
    if verify_password(from_db.user_hashed_password, password):
        return from_db
    return None
