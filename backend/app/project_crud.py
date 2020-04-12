from typing import List
from sqlalchemy.orm import Session
from . import models, schemas

# import ptvsd
# ptvsd.enable_attach(address=('0.0.0.0', 5678), log_dir='.')
# ptvsd.wait_for_attach()


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


def get_projects(db: Session, skip: int = 0, limit: int = 100) -> List[models.Project]:
    return db.query(models.Project).offset(skip).limit(limit).all()


def get_project_by_id(db: Session, project_id: int) -> models.Project:
    return db.query(models.Project).filter(models.Project.project_id == project_id).first()


def update_project(db: Session, old_project_id: int, patch_object: schemas.ProjectUpdate) -> models.Project:
    data = db.query(models.Project).get(old_project_id)
    if data:
        patched_data = patch_helper(data, patch_object)
        db.add(patched_data)
        db.commit()
        db.refresh(patched_data)
        return patched_data
    else:
        return None


def delete_project(db: Session, del_project_id: int) -> int:
    data = db.query(models.Project).get(del_project_id)
    if data:
        db.delete(data)
        db.commit()
        return del_project_id
    else:
        return None


def patch_helper(data, patch_object):
    for key_value in patch_object:
        key = key_value[0]
        value = key_value[1]
        if value is not None:
            setattr(data, key, value)
    return data
