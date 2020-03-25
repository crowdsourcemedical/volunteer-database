# This directory contains scripts that may come in handy as a backend dev


## Database connection:

The database should be built inside a docker container when you run `docker-compose up`

* Running `psql.bat` or `psql.sh` should connect you to the database hosted inside the db docker container. If successful you should have a *psql* command prompt where you can check tables with `\d` or perform sql queries.

* The script contains the following:
    
    ```
    docker exec -ti ${db_name} psql -U ${db_user} ${db_name}
    ```

    * `${db_user}` = *postgres*
    * `${db_name}` = *CMS*
    * `${db_name}` = this is dependent on the db docker container's name, **unfortunately this is dependent on the folder this repo is cloned into**. Chances are it is *volunteer-database_db_1* but if you did a `git clone .` it will be different. In this case use `${parent_folder}_db_1`.