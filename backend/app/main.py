from fastapi import FastAPI, Depends, HTTPException, APIRouter
from . import crud, models, schemas
from .database import SessionLocal, engine
from typing import List
from sqlalchemy.orm import Session
from .routers import users

models.Base.metadata.create_all(bind=engine)
CSM_Backend = FastAPI()

CSM_Backend.include_router(users.CSM_router)
@CSM_Backend.get("/")
async def root():
    return {"message": "This is the root of the API. Please go to site.com/docs to see the documentation"}

# Insert into the DB with something like INSERT INTO users VALUES(1, 'petersteele111@gmail.com', 'Peter', 'Steele', 'petersteele111', '012sdf02501sdf40sdf', 'True', 'True', 'Software Developer', 'Software Developer with 10 Years experience', 'Williamsburg, Michigan', '2020-03-22 12:00:00');
