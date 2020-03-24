import os
import time

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


if os.environ.get("ENV_NAME") == "test":
    print('=== Running in test environment, using in-memory database ===')
    SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"
else:
    # Small wait to fix db bug
    time.sleep(5)
    SQLALCHEMY_DATABASE_URL = "postgres+psycopg2://postgres:dev-password-123@db:5432/CSM"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
