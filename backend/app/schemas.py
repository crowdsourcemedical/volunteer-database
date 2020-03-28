from datetime import datetime
from typing import Any, List, Optional

from pydantic import BaseModel


class UserBase(BaseModel):
    user_id: int

    class Config:
        orm_mode = True


class UserCreate(BaseModel):
    user_email: str
    user_first: str
    user_last: str
    user_password: str
    user_location: Optional[str]
    user_description: Optional[str]
    user_profile_picture: Optional[bytes]
    user_is_active: bool
    user_is_admin: bool
    user_skill: Optional[str]
    user_is_medical_professional: bool
    user_is_verified: bool
    user_is_volunteer: bool


class User(UserBase):
    user_email: str
    user_first: str
    user_last: str
    user_skill: Optional[str]
    user_description: Optional[str]
    user_profile_picture: Optional[bytes]
    user_location: Optional[str]
    user_is_active: bool
    user_is_medical_professional: bool
    user_is_verified: bool
    user_is_volunteer: bool


class UpdateUser(BaseModel):
    user_first: Optional[str]
    user_last: Optional[str]
    old_password: Optional[str]
    new_password: Optional[str]
    user_email: Optional[str]
    user_skill: Optional[str]
    user_description: Optional[str]
    user_profile_picture: Optional[bytes]
    user_location: Optional[str]
    user_is_medical_professional: Optional[bool]
    user_is_volunteer: Optional[bool]


class ProjectBase(BaseModel):
    project_id: int

    class Config:
        orm_mode = True


class ProjectCreate(BaseModel):
    user_id: str
    project_title: str
    project_description: str
    project_location: str
    project_is_active: bool
    project_created_on: datetime
    project_is_complete: bool
    project_last_active: datetime
    project_last_modified: datetime
    project_quantity: int


class Project(ProjectBase, ProjectCreate):
    skills: List[Any]
    users: List[User]
    volunteering_projects: List[Any]


class ProjectUpdate(BaseModel):
    user_id: Optional[str]
    project_title: Optional[str]
    project_description: Optional[str]
    project_location: Optional[str]
    project_is_active: Optional[bool]
    project_created_on: Optional[datetime]
    project_is_complete: Optional[bool]
    project_last_active: Optional[datetime]
    project_last_modified: Optional[datetime]
    project_quantity: Optional[int]
