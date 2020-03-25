FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

COPY ./backend/requirements.txt /tmp
RUN pip install -r /tmp/requirements.txt

COPY ./backend/app /app
