import os
from datetime import datetime

from fastapi.testclient import TestClient
from pytest import fixture

from ..crud import hash_password
from ..database import Base, engine, SessionLocal, DB_TEST_FILE_NAME
from ..main import app
from ..models import User


@fixture(scope="function", autouse=True)
def db() -> SessionLocal:
    """Return a database connection that can be used to commit items during testing.

    Because this method is 'autouse=True', it will be ran before *every* test method.
    This means that every test will have a test database with tables created to use
    however the test method needs. Because of the 'yield' in this method body, this
    test database will be cleared _after_ every test method.
    """
    try:
        db = SessionLocal()
        Base.metadata.create_all(bind=engine)
        yield db
    finally:
        Base.metadata.drop_all(bind=engine)
        db.close()


@fixture(scope="module")
def testclient() -> TestClient:
    """Return a client for testing endpoints."""
    return TestClient(app)


@fixture(scope="function")
def unsaved_user() -> User:
    """Return a User object that can be committed to the database."""
    return User(
        user_id=1,
        user_email="some@where",
        user_first="AAA",
        user_last="BBB",
        username="CCC",
        is_active=True,
        is_verified=False,
        user_skill="DDD",
        user_description="EEE",
        user_location="FFF",
        user_hashed_password=hash_password("password"),
        user_last_login=datetime(2020, 3, 24)
    )


@fixture(scope="session", autouse=True)
def removed_db_file():
    """Remove the test database file after tests finish."""
    yield
    if os.path.exists(DB_TEST_FILE_NAME):
        os.remove(DB_TEST_FILE_NAME)
