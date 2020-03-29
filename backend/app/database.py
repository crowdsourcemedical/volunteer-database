import os
import time

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


DB_URL_MAIN = "postgres+psycopg2://postgres:dev-password-123@db:5432/CSS"
DB_TEST_FILE_NAME = "test.db"
DB_URL_TEST = "sqlite:///./" + DB_TEST_FILE_NAME

db_args = {}
if os.environ.get("ENV_NAME") == "test":
    print('=== Running in test environment, using test database ===')
    SQLALCHEMY_DATABASE_URL = DB_URL_TEST
    # https://fastapi.tiangolo.com/tutorial/sql-databases/#note
    db_args["check_same_thread"] = False
else:
    # Small wait to fix db bug
    time.sleep(5)
    SQLALCHEMY_DATABASE_URL = DB_URL_MAIN

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args=db_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    """Returns a database connection."""
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
