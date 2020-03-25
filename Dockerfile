FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

COPY backend/requirements.txt /tmp
RUN pip install -r /tmp/requirements.txt

COPY backend/app /app

# base image
FROM node:13.10.1-alpine
RUN apk add --update bash git yarn && rm -rf /var/cache/apk/*
ADD frontend/run .
