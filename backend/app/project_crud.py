from typing import List
from sqlalchemy.orm import Session
from . import models, schemas


def create_project(db: Session, project: schemas.ProjectCreate):
    db_project = models.Project(
        user_id=project.user_id,
        project_title=project.project_title,
        project_description=project.project_description,
        project_location=project.project_location,
        project_is_active=project.project_is_active,
        project_created_on=project.project_created_on,
        project_is_complete=project.project_is_complete,
        project_last_active=project.project_last_active,
        project_last_modified=project.project_last_modified,
        project_quantity=project.project_quantity
    )
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

def get_projects(db: Session, skip: int = 0, limit: int = 100) -> List[models.Skill]:
    return db.query(models.Skill).offset(skip).limit(limit).all()


# def get_project_by_name(db: Session, skill_name: str) -> models.Skill:
#     return db.query(models.Skill).filter(models.Skill.skill_name == skill_name).first()

# def get_project_by_id(db: Session, skill_id: int) -> models.Skill:
#     return db.query(models.Skill).filter(models.Skill.skill_id == skill_id).first()


# def update_project(db: Session, old_skill_id: int, patch_object: schemas.SkillUpdateCreate) -> models.Skill:
#     data = db.query(models.Skill).get(old_skill_id)
#     if data:
#         data.skill_name = patch_object.skill_name
#         data.category = patch_object.category
#         db.add(data)
#         db.commit()
#         return data
#     else:
#         return None


# def delete_project(db: Session, del_skill_id: int) -> int:
#     data = db.query(models.Skill).get(del_skill_id)
#     if data:
#         db.delete(data)
#         db.commit()
#         return del_skill_id
#     else:
#         return None
