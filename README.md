# WanderOn

# User Authentication System

This project implements a secure user authentication system using modern web development practices. The system includes user registration and login functionalities, adhering to industry standards for security and data validation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Security Measures](#security-measures)
- [Error Handling](#error-handling)
- [Design Decisions](#design-decisions)
- [Documentation](#documentation)

## Features

### User Registration
- Users can create an account by providing necessary information (username/email, password, etc.).
- Passwords are hashed using bcrypt before storing in MongoDB.
- Server-side validation ensures data integrity.

### User Login
- Users can log in using their credentials (username/email and password).
- Upon successful login, a JSON Web Token (JWT) is generated, containing relevant user information (excluding sensitive data like passwords).
- A session is maintained using cookies (non-sticky).

## Technologies Used

- **Frontend:** Next.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Hosting:** Microsoft Azure (Backend)

## Setup and Installation

### Prerequisites
- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PAND-IAM-IC/WanderOn
   cd WanderOn
Install dependencies for both frontend and backend:


Copy code
cd frontend
npm install
cd ../backend
npm install
Set up environment variables:

bash
Copy code
cd backend
npm start
Start the frontend server:

bash
Copy code
cd frontend
npm run dev
Usage
TO VIEW THE LOGIN/SIGNUP PAGE, FIRE THIS URL AFTER YOUR LOCALHOST URL:

http://localhost:3000/SignUp
Hosted Backend
The backend is hosted on Microsoft Azure.

Viewing Tokens and Responses
Since there is no other page after this, the user token and response from the backend can be viewed in the network response tab after inspecting it on the browser or by running the APIs on Postman.

API Endpoints
Registration
URL: /api/register
Method: POST
Request Body:
json
Copy code
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "examplePassword"
  "Yourname": "ShauryaChaturvedi"
}
Login
URL: /api/login
Method: POST
Request Body:
json
Copy code
{
  "email": "user@example.com",
  "password": "examplePassword"
}
Protected Endpoint Example
URL: /api/protected
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer <your-jwt-token>"
}
Security Measures
Password Hashing: Passwords are hashed using bcrypt before storing in the database.
JWT: JSON Web Tokens are used for secure authentication.
Cookie Security: Secure cookies are used for session management.
Input Sanitization: User inputs are sanitized to prevent XSS and injection attacks.
Error Handling
Registration Errors: Appropriate messages are returned for invalid or duplicate registration attempts.
Login Errors: Error messages are returned for incorrect credentials or inactive accounts.
Token Handling: Errors related to JWT validation are handled gracefully.
Design Decisions
Architecture: The application is divided into frontend (Next.js) and backend (Node.js, Express.js) for better separation of concerns and scalability.
Validation: Both client-side and server-side validations are implemented for robust data integrity.
Scalability: The use of MongoDB allows for flexible and scalable data storage.
Documentation
