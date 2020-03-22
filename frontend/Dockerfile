# base image
FROM node:13.10.1-alpine
RUN apk add --update bash git yarn && rm -rf /var/cache/apk/*
ADD frontend/run .
