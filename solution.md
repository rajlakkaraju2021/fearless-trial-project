Fearless Trial Project RESTful API for managing items
======================================

This is a ReSTFUL web application API that allows a client to manage a list of items. The API is served on port 3000 and includes the following endpoints on the `/items` resource:

-   `GET /items`: retrieves the current list of items
-   `POST /items`: sets the list of items to the payload provided in the request
-   `DELETE /items`: deletes all of the items

Each item has two properties: `id` and `name`. Items are persisted in a database while the application is running.

Building and running the solution
---------------------------------

To build and run the solution, follow these steps:

1.  Install [Docker](https://www.docker.com/) on your machine.
2.  Clone this repository and navigate to the root directory of the project.
3.  Build the Docker image by running the following command:

Copy code

`docker build -t (username)/fearless-trial-project .`

1.  Run the Docker image by running the following command:

Copy code

`docker run -p 3000:3000 fearless-trial-project`

This will start the web application and serve it on port 3000. You can access the API using a tool like Postman or curl.

You can easily change the port number by replacing 3000 with any port number and adding the flag -e PORT=(your_chosen_number)
For example:

Copy code

`docker run -p 8080:8080 -e PORT=8080 fearless-trial-project`

Future updates and changes
--------------------------

Some future updates and changes that could be added to this solution include:

-   Adding authentication and authorization to the API to limit access to certain endpoints and users.
-   Improving the persistence of items by using a more robust database solution, such as MongoDB or MySQL.
-   Adding support for additional HTTP methods, such as PATCH, to enable more granular updates to items.
-   Adding support for pagination to enable the retrieval of large lists of items.
-   Adding support for filtering and sorting to enable the retrieval of specific subsets of items.

Assumptions and implementation details
--------------------------------------

-   The API assumes that items have a unique `id` property. This is used to identify items when updating or deleting them.
-   The API uses a local file-based database to persist items. This is a simple solution that works well for small amounts of data, but may not be suitable for larger amounts of data.
-   The API does not include any validation or error handling for requests with invalid payloads. In a production environment, it would be important to add this to ensure the integrity of the data.
-   The API does not include any logging or monitoring to track requests and responses. In a production environment, it would be important to add this to help diagnose issues and improve the API.