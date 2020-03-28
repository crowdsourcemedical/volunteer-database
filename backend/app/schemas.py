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
    username: str
    password: str
    user_skill: Optional[str]
    user_description: Optional[str]
    user_profile_picture: Optional[bytes]
    user_location: Optional[str]
    is_medical_professional: bool
    is_volunteer: bool

    class Config:
        orm_mode = True


class Login(BaseModel):
    username: str
    password: str

    class Config:
        orm_mode = True


class User(UserBase):
    user_email: str
    user_first: str
    user_last: str
    username: str
    user_skill: Optional[str]
    user_description: Optional[str]
    user_profile_picture: Optional[bytes]
    user_location: Optional[str]
    is_medical_professional: bool
    is_volunteer: bool


class Skill(BaseModel):
    skill_name: str
    category: str

    class Config:
        orm_mode = True
        