from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import crud, schemas
from ..database import get_db


router = APIRouter()


@router.get("/", response_model=List[int])
def get_projects(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    pass


@router.post("/")
def create_project(data: schemas.ProjectCreate, db: Session = Depends(get_db)):
    pass


@router.get("/{project_id}")
def get_project(project_id: int, db: Session = Depends(get_db)):
    pass


@router.put("/{project_id}")
def update_project(project_id: int, data: schemas.ProjectUpdate, db: Session = Depends(get_db)):
    pass


@router.delete("/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    pass
