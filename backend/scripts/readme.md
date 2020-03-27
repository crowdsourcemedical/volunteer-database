# This directory contains scripts that may come in handy as a backend dev


## Database connection:

The database should be built inside a docker container when you run `docker-compose up`

* Running `psql.bat` or `psql.sh` should connect you to the database hosted inside the db docker container. If successful you should have a *psql* command prompt where you can check tables with `\d` or perform sql queries.

* The script contains the following:
    
    ```
    docker exec -ti ${docker_container_name} psql -U ${db_user} ${db_name}
    ```

    * `${db_user}` = *postgres*
    * `${db_name}` = *CSS*
    * `${docker_container_name}` = *css_db*

> Note if `psql` doesn't work try rebuilding docker containers with `scripts/docker-rebuild`

## Pytest:

If you have make installed, run `make all` from the *backend* directory
If you are on a Window host, run `pytest.bat`
