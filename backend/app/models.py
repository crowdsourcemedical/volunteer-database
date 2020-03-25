from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import HSTORE
from sqlalchemy.types import ARRAY
from .database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String, unique=True, index=True)
    user_first = Column(String(50))
    user_last = Column(String(50))
    username = Column(String(50), unique=True, index=True)
    user_hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    user_skill = Column(String(100))
    user_description = Column(String(250))
    user_location = Column(String(50))
    user_last_login = Column(DateTime)
    type = Column(String(50))

    def to_dict(self) -> dict:
        """Return a dict of many of this object's values
        for use in creating the JWT.

        Values that may be needed by the frontend and **ARE
        NOT SENSITIVE** should be include here.
        """
        return {
            "user_id": self.user_id,
            "user_email": self.user_email,
            "user_first": self.user_first,
            "user_last": self.user_last,
            "username": self.username,
            "is_active": self.is_active,
            "is_verified": self.is_verified,
            "user_skill": self.user_skill,
            "user_description": self.user_description,
            "user_location": self.user_location,
        }

    

    __mapper_args__ = {
        'polymorphic_identity':'users',
        'polymorphic_on':type
    }


class Volunteer(User):
    __tablename__ = 'volunteers'
    id = Column(Integer, ForeignKey('users.user_id'), primary_key=True)
    volunteer_descriptoin = Column(String(250))
    volunteer_location = Column(String(50))
    volunteer_skillset = Column(ARRAY(Integer))

    __mapper_args__ = {
        'polymorphic_identity':'volunteers'
    }