# This is the official CSM (Crowd source medical) database

![Django CI](https://github.com/crowdsourcemedical/volunteer-database/workflows/Django%20CI/badge.svg)
![Node.js CI](https://github.com/crowdsourcemedical/volunteer-database/workflows/Node.js%20CI/badge.svg)

We created this in light of the covid-19 pandemic to allow volunteers to work together in tackling the shortage of ventilator equipment.

Backend is a django rest api with a postgres database, Frontend is react

We're just getting started so documentation is lacking

Reach out to me and join the discord for help!

## Project setup

The procces to get setup and start developing is as simple as we could make it.

Make sure you have docker and docker-compose installed

## Installing docker

Docker provides a convienience script for installing docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Find instructions to install docker-compose here: https://docs.docker.com/compose/install/

## Running the project

Run the following commands

```sh
docker-compose build
docker-compose up
```

The frontend should now be accessible at localhost:3001

The backend is accessible at localhost:8000

The backend might crash the first time, this is because a bug in the db image. Simply run docker-compose up again and it should work

## Creating a PR

branch names should follow the format of username/branch-name

When you have a PR ready for review, assign 1 reviewer, add a link to the PR in the trello ticket, and move ticket into 'ready for review' column.

PR descriptions should mention any dependencies, blockers, deployment status etc.
