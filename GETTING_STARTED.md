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

### Project layout

Looking at files under `./backend/`:

```plain
├── alembic               - database migrations
├── alembic.ini           - db migration config
├── app                   - the actual backend code
│   ├── crud.py           - CRUD operations [1]
│   ├── database.py       - Code for directly interacting with the database
│   ├── __init__.py       - Package definition file [2]
│   ├── main.py           - Code for setting up the app and handling app-wide behavior
│   ├── models.py         - Code for defining database models [3]
│   ├── routers           - Package for defining routers [4]
│   ├── schemas.py        - Code for defining schemas for validating incoming data [5]
│   ├── tests             - Package for writing tests [6]
│   └── utils.py          - Code for app-wide utilities
├── Dockerfile            - Defines the Docker image content
├── Makefile              - Wrapper for complicated commands
├── pytest.ini            - Config for the unit test framework
├── requirements.txt      - List of dependencies for pip
```

\[1] [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete())
\[2] [Namespace packaged](https://docs.python.org/3/reference/import.html#namespace-packages)
\[3] See SQLAlchemy
\[4] [Routers](https://fastapi.tiangolo.com/tutorial/bigger-applications/)
\[5] [Pydantic](https://pydantic-docs.helpmanual.io/)
\[6] [Testing](https://fastapi.tiangolo.com/tutorial/testing/)

### I want to ...

#### Add a new model

Look in `./app/models.py`

#### Add a/several new endpoint(s)

The code you'll be looking at is under `./app/routers/`. If there's already a file that matches the idea (i.e. endpoints relating to groups - look for a `groups.py`,
endpoints relating to users - look for a `users.py`), then you'll want to add the new endpoint(s) to that file. If there isn't such a file, and you think that
the endpoint(s) you're adding don't fit any of the existing routers, then add a new file in that directory, follow the router pattern from the docs or from the
other files, and get to writing!

#### Modify an existing endpoint

Be careful! Although stuff is moving fast, there is an expectation that once we tell the frontend that an endpoint is ready for their use, everyone probably expects
it to keep working. Make sure that the Trello task you're working on states that you'll be modifying something that already exists.

Then, just find the code in whichever router it's defined it, and get to writing!
