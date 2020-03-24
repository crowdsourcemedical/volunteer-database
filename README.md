# This is the official CSM (Crowd source medical) database

![Python CI](https://github.com/crowdsourcemedical/volunteer-database/workflows/Python%20CI/badge.svg)
![Node.js CI](https://github.com/crowdsourcemedical/volunteer-database/workflows/Node.js%20CI/badge.svg)

## The What Now?
We created this in light of the COVID-19 pandemic to allow volunteers to work together in tackling the shortage of ventilator equipments.

We're just getting started so the documentation may still be lacking. Feel free to point out any issues in our Discord channel.

## Communication

### General
Discord: https://discord.gg/8dGbA5G

### Ticketing
Frontend: https://trello.com/b/4EqWn2Pt/csm-frontend

Backend: https://trello.com/b/plYXa1AI/csm-backend

UI/UX: https://trello.com/b/ZmElMiHV/cms-ui-ux-mockups

DevOps: https://trello.com/b/ggGTsmr8/csm-devops

Onboarding and Team Assignments: https://trello.com/b/lcE3lFLO/csm-onboarding-and-team-assignment

## The Tech Stack
Backend: Django Rest API, PostgreSQL

Frontend: React, Material UI, Cypress (for E2E-testing)

Environment: Docker, Docker Compose

## Project Setup

### Installing Docker

Run the following commands

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Find instructions to install docker-compose here: https://docs.docker.com/compose/install/

## Running the Project

Run the following commands

```sh
docker-compose build
docker-compose up -d # The flag -d leaves the process in the background. Feel free to omit it.
```

The frontend is now be accessible at `localhost:3001`. The backend is now accessible at `localhost:8000`.

The backend might crash the first time, this is because a bug in the db image. Simply run `docker-compose up (-d)` again and it should work.

## How to Contribute

### General
- Branch names are encouraged to use the following format: `<username>/<feature>`
- PRs are recommended to be reviewed by at least one person
- If you find an issue without a Trello card, feel free to add it. It is encouraged to write an informative description
about the issue so that basically anyone could start working on it.

### Contributing to the Frontend Development
Frontend tasks can be found here: https://trello.com/b/4EqWn2Pt/csm-frontend.

1. Pull `Frontend/Staging`
2. `git checkout -b <username>/<feature>`
3. Write a new Trello card or take an existing one, assign yourself into it, and move it to the "In Development" column
4. Code like never before, pour your heart into it, communicate with people, have fun
5. `git push -u origin <username>/<feature>`
6. Open a PR against `Frontend/Staging` and request at least one reviewer.
    - PR description should mention relevant information about dependencies, blockers, etc... 
7. Add a link to the PR in the Trello card, and move it to the "Ready for Review" column
7. Enjoy

If you don't have a permission to push, you can either request it from the Discord channel, or fork the project
and open a PR with your changes in it.  

### Contributing to the Backend Development

WIP
