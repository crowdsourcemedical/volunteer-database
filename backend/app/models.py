from sqlalchemy import Boolean, Column, Integer, LargeBinary, String, DateTime, ForeignKey
from .database import Base
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "user"
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
    is_volunteer = Column(Boolean, default=False)

    skills = relationship("Skill", 'user_skills')
    projects = relationship('Project', secondary='volunteer_project')

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


class Position(Base):
    __tablename__ = "position"
    position_id = Column(Integer, primary_key=True, index=True)
    position_name = Column(String(50))


class Project(Base):
    __tablename__ = "project"
    project_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.user_id"), nullable=False)
    project_title = Column(String(100), nullable=False)
    project_description = Column(String, nullable=False)
    project_location = Column(String(50), nullable=False)

    skills = relationship('Skill', secondary='project_skills')
    users = relationship(User, secondary='volunteer_project')


class Skill(Base):
    __tablename__ = "skill"
    skill_id = Column(Integer, primary_key=True, index=True)
    skill_name = Column(String(50), nullable=False, unique=True)
    category = Column(String(50))

    users = relationship(User, secondary='user_skills')
    projects = relationship(Project, secondary='project_skills')


class VolunteerProject(Base):
    __tablename__ = "volunteer_project"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.user_id'), nullable=False)
    position_id = Column(Integer, ForeignKey(
        'position.position_id'), nullable=False)
    project_id = Column(Integer, ForeignKey(
        'project.project_id'), nullable=False)


class UserSkills(Base):
    __tablename__ = "user_skills"
    id = Column(Integer, primary_key=True)
    skill_id = Column(Integer, ForeignKey('skill.skill_id'), nullable=False)
    user_id = Column(Integer, ForeignKey('user.user_id'), nullable=False)


class ProjectSkills(Base):
    __tablename__ = "project_skills"
    id = Column(Integer, primary_key=True)
    skill_id = Column(Integer, ForeignKey('skill.skill_id'), nullable=False)
    project_id = Column(Integer, ForeignKey(
        'project.project_id'), nullable=False)
