from typing import List
from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from .. import project_crud, schemas
from ..database import get_db
from .. import constants


router = APIRouter()


@router.post("/")
def create_project(project_input: schemas.ProjectCreate, db: Session = Depends(get_db)):
    return project_crud.create_project(db=db, project=project_input)


@router.get("/", response_model=List[schemas.Project])
def get_projects(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return project_crud.get_projects(db, skip=skip, limit=limit)


@router.get("/{project_id}", response_model=schemas.Project)
def get_project(project_id: int, db: Session = Depends(get_db)):
    db_project = project_crud.get_project_by_id(db, project_id=project_id)
    if (db_project) is None:
        raise HTTPException(status_code=404, detail=constants.PROJECT_ID_NOT_FOUND)
    return db_project


@router.put("/{project_id}")
def update_project(project_id: int, project_data: schemas.ProjectUpdate, db: Session = Depends(get_db)):
    db_project = project_crud.update_project(db, old_project_id=project_id, patch_object=project_data)
    if db_project is None:
        raise HTTPException(status_code=404, detail=constants.PROJECT_ID_NOT_FOUND)
    else:
        return db_project


@router.delete("/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    db_project = project_crud.delete_project(db, del_project_id=project_id)
    if db_project is None:
        raise HTTPException(status_code=404, detail=constants.PROJECT_ID_NOT_FOUND)
    else:
        return db_project
