from sqlalchemy import Boolean, Column, Integer, LargeBinary, String, DateTime, ForeignKey, Table
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
    user_profile_picture = Column(LargeBinary)
    user_location = Column(String(50))
    user_last_login = Column(DateTime)
    is_medical_professional = Column(Boolean, default=False)
    type = Column(String(50))

    def to_dict(self) -> dict:
        """Return a dict of many of this object's values
        for use in creating the JWT.

        Values that may be needed by the frontend and **ARE
        NOT SENSITIVE** should be include here.
        """
        return {
            "user_id": self.user_id,
            "username": self.username,
            "is_active": self.is_active,
            "is_verified": self.is_verified,
        }

    __mapper_args__ = {
        'polymorphic_identity': 'users',
        'polymorphic_on': type
    }


class Volunteer(User):
    __tablename__ = 'volunteers'
    id = Column(Integer, ForeignKey('users.user_id'), primary_key=True)
    volunteer_description = Column(String(250))
    volunteer_location = Column(String(50))
    volunteer_skillset = Column(ARRAY(Integer))

    __mapper_args__ = {
        'polymorphic_identity': 'volunteers'
    }


class Position(Base):
    __tablename__ = "position"
    position_id = Column(Integer, primary_key=True, index=True)
    position_name = Column(String(50))


class Project(Base):
    __tablename__ = "project"
    project_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    project_title = Column(String(100), nullable=False)
    project_description = Column(String, nullable=False)
    project_location = Column(String(50), nullable=False)


class Skill(Base):
    __tablename__ = "skill"
    skill_id = Column(Integer, primary_key=True, index=True)
    skill_name = Column(String(50), nullable=False, unique=True)


association_table = Table('requiredskills', Base.metadata,
                          Column('skill_id', Integer, ForeignKey('skill.skill_id')),
                          Column('project_id', Integer, ForeignKey('project.project_id')))
