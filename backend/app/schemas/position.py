from pydantic import BaseModel


class PositionBase(BaseModel):
    position_id: int

    class Config:
        orm_mode = True


class PositionCreate(BaseModel):
    position_name: str


class PositionUpdate(BaseModel):
    position_name: str


class Position(PositionBase):
    position_name: str
