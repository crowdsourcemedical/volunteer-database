from typing import Optional

from pydantic import BaseModel


class UserBase(BaseModel):
    user_email: str
    user_first: str
    user_last: str
    username: str
    is_active: bool = True
    is_verified: bool = False
    user_skill: Optional[str] = None
    user_description: Optional[str] = None
    user_location: Optional[str] = None


class UserCreate(UserBase):
    password: str


class User(UserBase):
    user_id: int

    class Config:
        orm_mode = True


class Login(BaseModel):
    email: str
    password: str
