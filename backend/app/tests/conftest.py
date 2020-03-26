from datetime import datetime

from fastapi.testclient import TestClient
from pytest import fixture

from ..crud import hash_password
from ..database import Base, engine, SessionLocal
from ..main import app
from ..models import User


@fixture(scope="function")
def db() -> SessionLocal:
    try:
        db = SessionLocal()
        Base.metadata.create_all(bind=engine)
        yield db
    finally:
        if db:
            Base.metadata.drop_all(bind=engine)
        db.close()


@fixture(scope="function")
def testclient() -> TestClient:
    return TestClient(app)


@fixture(scope="function")
def unsaved_user() -> User:
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
