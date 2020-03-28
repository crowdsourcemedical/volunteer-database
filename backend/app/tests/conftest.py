import os
from datetime import datetime

from fastapi.testclient import TestClient
from pytest import fixture
from sqlalchemy.orm import Session

from ..crud import hash_password
from ..database import Base, engine, SessionLocal, DB_TEST_FILE_NAME
from ..main import app
from ..models import User


@fixture(scope="function", autouse=True)
def db() -> Session:
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


@fixture(scope="session")
def reattach_db() -> Session:
    """Used to reconnect to the DB after the main app has modified it.

    I don't know why this is needed. If you know why this has to be here
    for tests that use the Starlette TestClient that FastAPI recommends
    to talk with actual app endpoints that modify the DB content, but not
    for tests that call functions directly that modify the DB content, then
    let me know and maybe this method doesn't need to exist.
        - Celeo
    """
    def _wrapper():
        return SessionLocal()
    return _wrapper


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
        user_last_login=datetime(2020, 3, 24),
        is_medical_professional=False,
        is_volunteer=True
    )


@fixture(scope="session", autouse=True)
def removed_db_file():
    """Remove the test database file after tests finish."""
    yield
    if os.path.exists(DB_TEST_FILE_NAME):
        os.remove(DB_TEST_FILE_NAME)
