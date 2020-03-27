from typing import Optional

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

    class Config:
        orm_mode = True


class Login(BaseModel):
    user_email: str
    user_password: str

    class Config:
        orm_mode = True


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
