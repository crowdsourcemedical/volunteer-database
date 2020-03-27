from typing import List

from fastapi import Depends, HTTPException, APIRouter
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


@router.post("/", response_model=schemas.UserCreate)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    """Endpoint to create a new user.

    Warnings:
        Need rate limiting on this endpoint"""
    db_user = crud.get_user_by_email(db, user_email=user.user_email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email is already registered")
    return crud.create_user(db=db, user=user)


@router.put("/me")
def update_self(
    changes: schemas.UpdateUser,
    user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
) -> List[str]:
    """Endpoint to allow a user to update *their own* profile."""
    fields_changed = []
    if changes.user_first:
        user.user_first = changes.user_first
        fields_changed.append('First name')
    if changes.user_last:
        user.user_last = changes.user_last
        fields_changed.append('Last name')
    if changes.new_password:
        if not changes.old_password:
            return HTTPException(status_code=400, detail="Must also supply current password")
        if not auth.verify_password(user.password, changes.old_password):
            return HTTPException(status_code=400, detail="Current password did not match")
        user.user_hashed_password = auth.hash_password(changes.new_password)
        fields_changed.append('Password')
    if changes.user_email:
        user.user_email = changes.user_email
        fields_changed.append('Email')
    if changes.user_skill:
        user.user_skill = changes.user_skill
        fields_changed.append('Skill')
    if changes.user_description:
        user.user_description = changes.user_description
        fields_changed.append('Description')
    if changes.user_profile_picture:
        user.user_profile_picture = changes.user_profile_picture
        fields_changed.append('Profile picture')
    if changes.user_location:
        user.user_location = changes.user_location
        fields_changed.append('Location')
    if changes.is_medical_professional:
        user.is_medical_professional = changes.is_medical_professional
        fields_changed.append('Is medical professional')
    if changes.is_volunteer:
        user.is_volunteer = changes.is_volunteer
        fields_changed.append('Is volunteer')
    db.commit()
    return fields_changed
