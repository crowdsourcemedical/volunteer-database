from typing import List

from fastapi import FastAPI, Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware

from . import crud, models, schemas
from .utils import verify_password
from .database import SessionLocal, engine
from .routers import users

models.Base.metadata.create_all(bind=engine)
CSM_Backend = FastAPI()
CSM_Backend.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

CSM_Backend.include_router(users.CSM_router)


@CSM_Backend.get("/")
async def root():
    return {"message": "This is the root of the API. Please go to site.com/docs to see the documentation"}
