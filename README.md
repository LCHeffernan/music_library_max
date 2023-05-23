# Music Library

![Image of a record collection](https://unsplash.com/photos/i0LcODk-V1Q)

## Description

An API that allows users to interact with a database of artists and albums.

## Purpose

To improve my understanding of APIs and how to structure files on a more complex project, as well as giving me plenty of practise in using async/await Javascript and providing me with an opportunity to revist SQL.

## Tech that was used

- Docker: the database was set up on a Postgres server in a Docker container
- Postgres: used both for the server mentioned above and also to manually access the databases
- Postman: used for manually testing the API, helped with troubleshooting some errors

## Why this tech?

I used Docker to keep the resources required when building and testing the API to a minimum.
I chose Postgres and Postman because they both have very user friendly UIs and made it easy to pick up on errors.

## How to install and run the Music Library

- Fork and clone this repository
- Open the cloned directory and run `npm install`
- Download and install Docker from this link: [Docker download page](https://docs.docker.com/get-docker/)
- Pull and run a postgres image by running this in your terminal: `docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres`
- Download and install pgAdmin4 from this link: [pgAdmin4 downloads page](https://www.pgadmin.org/download/)
- Run pgAdmin4, click on the `Add New Server` button. Use the following credentials to connect:
  - Hostname/address: localhost
  - User: postgres
  - Password: password
- Give the server a name
- Download and install Postman from this link: [Postman download page](https://www.postman.com/downloads/)

## How to use it

Use any of the routes specified in in files in the routes directory to interact with the database using Postman. Post, put and patch requests require user input in the request body written in JSON. For example, to create an artist in the database:

- Open postman and click on the `+` sign in the top left
- Select POST from the drop down list
- Enter the URL http://localhost:3000/artists
- Select the `Body` tab below the URL and enter `{ "name": "Artist Name", "genre": "musical genre"}`
- Click `Send`

Use pgAdmin4 to view the database.

## Credits

I used the Command Shift npx script to set up the basic scaffolding of the project; the Command Shift track and all of the tutors helped me along the way, as well as some of the other students in my cohort.
