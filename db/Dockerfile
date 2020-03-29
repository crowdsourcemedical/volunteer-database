FROM postgres

RUN mkdir -p /docker-entrypoint-initdb.d

ADD ./db/init/* /docker-entrypoint-initdb.d
