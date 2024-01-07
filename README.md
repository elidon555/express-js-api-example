
# README for Horizont Labs Backend Coding Task

## Overview
This NodeJS REST API, built with ExpressJS, provides an endpoint to identify numbers that are palindromes, primes, or both, based on the provided range and features. It's designed with robust input validation, comprehensive unit tests, and Docker support for easy deployment and testing.

## Features
- **POST Endpoint**: Accepts `minNumber`, `maxNumber`, and `feature` parameters.
- **Validations**: Ensures `minNumber` is positive, `maxNumber` is greater than `minNumber`, and `feature` contains only "palindrome" and/or "prime".
- **Response**: Returns an array of numbers and the execution time.
- **Unit Testing**: High test coverage for validation and core logic.
- **TypeScript Integration**: Utilizes TypeScript for type safety and maintainability.
- **Dockerization**: Containerized for easy setup and consistent runtime environment.
- **Security Measures**: Implements best practices to secure the API.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Docker (for Dockerized setup)
- NPM

### Local Setup
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application
1. Start the server:
   ```
   npm start
   ```
2. The application will be available at `http://localhost:3000`.

### Using Docker
1. Build the Docker image:
   ```
   docker build -t horizont-labs-backend .
   ```
2. Run the container:
   ```
   docker run -p 3000:3000 -d horizont-labs-backend
   ```

### Running Tests
To run the unit tests and check code coverage:
```
npm test
```

## API Usage

### POST `/api/numbers`
Accepts JSON payload containing `minNumber`, `maxNumber`, and `feature` array.

#### Request Body Example
```json
{
  "minNumber": 1,
  "maxNumber": 10000000,
  "feature": ["palindrome", "prime"]
}
```

#### Response Example
```json
{
  "data": [2, 3, 5, 7, 11, ...],
  "timeOfExecution": 0.3950716
}
```


## Error Responses

### Example of a 400 Bad Request Error
This occurs when the input validation fails, such as providing invalid types for the parameters.

```json
{
    "errors": [
        {
            "message": "Bad request",
            "context": [
                {
                    "target": {
                        "featureChecks": {},
                        "minNumber": "1",
                        "maxNumber": 10000,
                        "feature": [
                            "palindrome",
                            "prime"
                        ]
                    },
                    "value": "1",
                    "property": "minNumber",
                    "children": [],
                    "constraints": {
                        "min": "minNumber must not be less than 1",
                        "isInt": "minNumber must be an integer number"
                    }
                }
            ]
        }
    ]
}
```

### Example of a 500 Internal Server Error
This is a generic error message for unexpected server-side issues.

```json
{
    "errors": [
        {
            "message": "Something went wrong"
        }
    ]
}
```

## Security
The API is secured against common vulnerabilities, including:
- Input validation to prevent injection attacks.
- Rate limiting (30 requests per minute)

## Contributions
Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any inquiries or issues, please open an issue on the GitHub repository.

---
