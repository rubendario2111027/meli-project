# Meli Backend Application

Spring Boot application providing API services for the Meli project. This application is responsible for handling product data, search functionalities, and other backend logic.

## Prerequisites

- Docker Desktop (or Docker Engine with Docker Compose) installed and running.

## How to Build

1.  Navigate to the backend application directory from the **project root**:
    ```bash
    cd meli-full-project/meli-backend/meli-backend
    ```
    (Note: If you are already in `meli-full-project2`, then it would be `cd meli-full-project/meli-backend/meli-backend`)

2.  Build the Docker image:
    ```bash
    docker build -t meli-backend .
    ```

## How to Run

1.  Run the Docker container:
    ```bash
    docker run -p 8080:8080 meli-backend
    ```

2.  The application will be accessible at `http://localhost:8080`.

## Using Docker Compose

Alternatively, you can use Docker Compose to build and run this service, especially if you are managing a multi-container setup. The service is defined in the `docker-compose.yml` file.

1.  Ensure you are in the directory containing `docker-compose.yml` (`meli-full-project/meli-backend/meli-backend`).
2.  Run the backend service using Docker Compose:
    ```bash
    docker-compose up backend
    ```
    Or, to build and then run:
    ```bash
    docker-compose up --build backend
    ```
    If it's the primary or only service you want to run from the compose file, `docker-compose up` might suffice.

## API Endpoints

Key API endpoints provided by this service include:

-   `GET /api/products`: Retrieves a list of products, potentially with search/filter capabilities.
-   `GET /api/products/{id}`: Retrieves details for a specific product by its ID.

(TODO: Add more details about request parameters, response formats, and other relevant endpoints as the API evolves.)
