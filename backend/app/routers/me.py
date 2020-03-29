from fastapi import Depends, HTTPException, APIRouter, status
from fastapi.responses import Response
from sqlalchemy.orm import Session

from .. import auth, models, schemas
from ..database import get_db


router = APIRouter()


@router.get("", response_model=schemas.UserFull)
def get_self(
    user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    """Endpoint to get current user's data. This includes projects, skills, etc"""
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    user_json = user.__dict__
    del user_json["user_hashed_password"]
    skills = user.skills
    user_json["skills"] = skills
    user_projects = []
    for vp in user.volunteering_projects:
        user_proj = {}
        user_proj["project"] = vp.project
        user_proj["position"] = vp.position
        user_projects.append(user_proj)

    user_json["projects"] = user_projects
    return user_json


@router.put("")
def update_self(
    changes: schemas.UpdateUser,
    user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    """Endpoint to allow a user to update *their own* profile."""
    user.user_first = changes.user_first or user.user_first
    user.user_last = changes.user_last or user.user_last
    if changes.new_password:
        if not changes.old_password:
            raise HTTPException(
                status_code=400, detail="Must also supply current password")
        if not auth.verify_password(user.user_hashed_password, changes.old_password):
            raise HTTPException(
                status_code=400, detail="Current password did not match")
        if len(changes.new_password) < auth.MINIMUM_PASSWORD_LENGTH:
            raise HTTPException(
                status_code=400,
                detail=f"New password much be at least {auth.MINIMUM_PASSWORD_LENGTH} characters long"
            )
        user.user_hashed_password = auth.hash_password(changes.new_password)
    user.user_email = changes.user_email or user.user_email
    user.user_skill = changes.user_skill or user.user_skill
    user.user_description = changes.user_description or user.user_description
    user.user_profile_picture = changes.user_profile_picture or user.user_profile_picture
    user.user_location = changes.user_location or user.user_location
    user.user_is_medical_professional = changes.user_is_medical_professional or user.user_is_medical_professional
    user.user_is_volunteer = changes.user_is_volunteer or user.user_is_volunteer
    db.add(user)
    db.commit()
    return Response(status_code=status.HTTP_200_OK)
