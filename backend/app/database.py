from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import time
# You will need to create your own database here if you are developing locally
# Reach out to me if you need help with setting up a postgres database or installing the proper modules for python
#Small wait to fix db bug
time.sleep(5)
SQLALCHEMY_DATABASE_URL = "postgres+psycopg2://postgres:dev-password-123@db:5432/CSM"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
