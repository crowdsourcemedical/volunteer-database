FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7
RUN pip install sqlalchemy psycopg2 passlib  bcrypt

COPY ./backend/app /app
