# Growflect

A twitter-like social media for posting you achievements everyday so that later you can review them and do reflection on what you've achieved until today.

## User Problem
I don’t remember what achievements I have made throughout the year, and so do I for what I learned in a year. I want to always be able to review it (achievements & learnings) to observe how much I grow this year.

## How to Install

1. Clone this project repository
2. Run `npm install` on your project root directory in the terminal
3. Setup your PosgreSQL database

## How to Setup DB on your local using Docker
1. Open your terminal app.
2. Create a folder `DOCKER/` and a file `docker-compose.yml` inside that folder (you're free to set the folder name).
    ```yaml
    version: '3.8'
    services:
        postgresql:
            image: postgres:16-alpine
            environment:
                POSTGRES_USER: ${POSTGRES_USER}
                POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
            ports:
                - "5434:5432"
            restart: always
            volumes:
                - database-data:/var/lib/postgresql/data

    volumes:
        database-data:
    ```
3. Create an `.env` file inside that `DOCKER/` folder to set the value of `POSTGRES_USER` and `POSTGRES_PASSWORD`.
    ```env
    POSTGRES_USER='your_postgres_username'
    POSTGRES_PASSWORD='your_postgres_password'
    ```
4. Run `docker compose up -d` in `DOCKER/` folder to create & run the docker container for PostgreSQL Database.
5. Create an `.env` file on the root directory of your project to set the DB URL.
    ```env
    DB_URL=postgres://your_postgres_username:your_postgres_password@localhost:5434/db_name
    ```
6. 