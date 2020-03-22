from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
# You will need to create your own database here if you are developing locally
# Reach out to me if you need help with setting up a postgres database or installing the proper modules for python
SQLALCHEMY_DATABASE_URL = "postgres+psycopg2://postgres:@localhost:5432/CSM"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
