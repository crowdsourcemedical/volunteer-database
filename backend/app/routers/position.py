from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import Response
from sqlalchemy.orm import Session

from .. import schemas
from ..database import get_db
from ..models import Position, VolunteerProject


router = APIRouter()


@router.get("/", response_model=List[schemas.Position])
def get_positions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """Endpoint to get a list of position ids."""
    return db.query(Position).offset(skip).limit(limit).all()


@router.post("/", response_model=schemas.Position)
def create_position(data: schemas.PositionCreate, db: Session = Depends(get_db)):
    """Endpoint to create a position."""
    p = Position(**data.dict())
    db.add(p)
    db.commit()
    db.refresh(p)
    return p


@router.get("/{position_id}", response_model=schemas.Position)
def get_position(position_id: int, db: Session = Depends(get_db)):
    """Endpoint to get information on a single position."""
    p = db.query(Position).filter(Position.position_id == position_id).first()
    if not p:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Position not found")
    return p


@router.put("/{position_id}")
def update_position(position_id: int, data: schemas.PositionUpdate, db: Session = Depends(get_db)):
    """Endpoint to update an existing position."""
    p = db.query(Position).filter(Position.position_id == position_id).first()
    if not p:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Position not found")
    p.position_name = data.position_name or p.position_name
    db.commit()
    return Response(status_code=status.HTTP_200_OK)


@router.delete("/{position_id}")
def delete_position(position_id: int, db: Session = Depends(get_db)):
    """Endpoint to delete an existing position."""
    p = db.query(Position).filter(Position.position_id == position_id).first()
    if not p:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Position not found")
    vps = db.query(VolunteerProject).filter(VolunteerProject.position_id == position_id).all()
    for vp in vps:
        db.delete(vp)
    db.delete(p)
    db.commit()
    return Response(status_code=status.HTTP_200_OK)
