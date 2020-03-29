import os
from datetime import datetime

from fastapi.testclient import TestClient
from pytest import fixture
from sqlalchemy.orm import Session

from app.crud.user import hash_password
from app.database import Base, engine, SessionLocal, DB_TEST_FILE_NAME
from app.main import app
from app.models import User, Skill, Project, Position, VolunteerProject


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
def test_client() -> TestClient:
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
        user_is_active=True,
        user_is_verified=False,
        user_skill="DDD",
        user_description="EEE",
        user_location="FFF",
        user_hashed_password=hash_password("password"),
        user_last_login=datetime(2020, 3, 24),
        user_is_medical_professional=False,
        user_is_volunteer=True
    )


@fixture(scope="session", autouse=True)
def removed_db_file():
    """Remove the test database file after tests finish."""
    yield
    if os.path.exists(DB_TEST_FILE_NAME):
        os.remove(DB_TEST_FILE_NAME)


@fixture(scope="function")
def unsaved_project() -> Project:
    return Project(
        project_id=1,
        user_id=1,
        project_title="Test Project",
        project_description="Good things",
        project_location="some place",
        project_is_active=True,
        project_created_on=datetime(2020, 3, 24),
        project_is_complete=False,
        project_last_active=datetime(2020, 3, 25),
        project_quantity=10
    )


@fixture(scope="function")
def unsaved_skill() -> Skill:
    return Skill(
        skill_id=1,
        skill_name="The best skill",
        category="Good Skills",
    )


@fixture(scope="function")
def unsaved_position() -> Position:
    return Position(
        position_id=1,
        position_name="manager"
    )


@fixture(scope="function")
def unsaved_user_with_relations(unsaved_user, unsaved_skill,
                                unsaved_project, unsaved_position) -> User:
    user = unsaved_user
    user.skills.append(unsaved_skill)
    vp = VolunteerProject(
        id=1
    )
    vp.user = user
    vp.position = unsaved_position
    vp.project = unsaved_project
    return user
