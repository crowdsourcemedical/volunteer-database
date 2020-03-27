from sqlalchemy import Boolean, Column, Integer, LargeBinary, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):

    __tablename__ = "user"

    user_id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String, unique=True, index=True)
    user_first = Column(String(50))
    user_last = Column(String(50))
    user_hashed_password = Column(String)
    user_location = Column(String(50))
    user_description = Column(String(250))
    user_profile_picture = Column(LargeBinary)
    user_is_active = Column(Boolean, default=True)
    user_is_admin = Column(Boolean, default=False)
    user_last_login = Column(DateTime)
    user_is_medical_professional = Column(Boolean, default=False)
    user_is_verified = Column(Boolean, default=False)
    user_registered_date = Column(DateTime)
    user_skill = Column(String(100))
    user_is_volunteer = Column(Boolean, default=False)

    skills = relationship("Skill", "user_skill")
    projects = relationship("Project", secondary="volunteer_project")

    def to_dict_for_jwt(self) -> dict:
        """Return a dict of many of this object's values
        for use in creating the JWT.

        Values that may be needed by the frontend and **ARE
        NOT SENSITIVE** should be include here.
        """
        return {
            "user_id": self.user_id,
            "is_active": self.user_is_active,
            "is_verified": self.user_is_verified,
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
    project_is_active = Column(Boolean, default=True)
    project_created_on = Column(DateTime)
    project_is_complete = Column(Boolean)
    project_last_active = Column(DateTime)
    project_last_modified = Column(DateTime)
    project_quantity = Column(Integer, default=0)

    skills = relationship("Skill", secondary="project_skill")
    users = relationship(User, secondary="volunteer_project")


class Skill(Base):

    __tablename__ = "skill"

    skill_id = Column(Integer, primary_key=True, index=True)
    skill_name = Column(String(50), nullable=False, unique=True)
    category = Column(String(50))

    users = relationship(User, secondary="user_skill")
    projects = relationship(Project, secondary="project_skill")


class VolunteerProject(Base):

    __tablename__ = "volunteer_project"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.user_id"), nullable=False)
    position_id = Column(Integer, ForeignKey("position.position_id"), nullable=False)
    project_id = Column(Integer, ForeignKey("project.project_id"), nullable=False)


class UserSkills(Base):

    __tablename__ = "user_skill"

    id = Column(Integer, primary_key=True)
    skill_id = Column(Integer, ForeignKey("skill.skill_id"), nullable=False)
    user_id = Column(Integer, ForeignKey("user.user_id"), nullable=False)


class ProjectSkills(Base):

    __tablename__ = "project_skill"

    id = Column(Integer, primary_key=True)
    skill_id = Column(Integer, ForeignKey("skill.skill_id"), nullable=False)
    project_id = Column(Integer, ForeignKey("project.project_id"), nullable=False)
