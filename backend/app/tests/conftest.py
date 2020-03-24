from fastapi.testclient import TestClient
from pytest import fixture

from ..main import app
from ..database import Base, engine, SessionLocal


@fixture(scope="function")
def db():
    try:
        db = SessionLocal()
        Base.metadata.create_all(bind=engine)
        yield db
    finally:
        if db:
            Base.metadata.drop_all(bind=engine)
        db.close()


@fixture(scope="function")
def testclient():
    return TestClient(app)
