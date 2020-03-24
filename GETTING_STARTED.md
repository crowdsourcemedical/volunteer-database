# Getting started

## Tech stack

- [React](https://reactjs.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [PostgreSQL](https://www.postgresql.org/)

## General

1. Get [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/)
1. Clone https://github.com/crowdsourcemedical/volunteer-database/tree/master
1. Run `docker-compose build` to build the frontend, backend, and DB images

## Frontend

TBD

## Backend

The files you'll be interested in are in `./backend/`. We're using FastAPI, so have a read over those docs. Additionally, for communicating
with the database, we're using [SQLAlchemy](https://www.sqlalchemy.org/).

The files directly under `./backend/app/` should be simple enough. We're grouping similar endpoints in routers under `./backend/app/routers/`.

Please write tests, at least unit tests for the logic that are part of your endpoints. FastAPI has a [doc page](https://fastapi.tiangolo.com/tutorial/testing/)
on testing that includes links to how to arrange your tests and how they're ran with [pytest](https://docs.pytest.org/en/latest/). To run all
of the unit tests, run `make unit` in the `./backend/` directory (requires [make](https://en.wikipedia.org/wiki/Make_(software))).

If you're making any changes to the DB connection or models, please make sure you have alignment on what your changes are supposed to look
like before starting, as this will influence the entire project.
