# JWT Authentication System

A secure backend authentication system built using Node.js, Express, PostgreSQL, JWT, and bcrypt.

This project demonstrates how modern authentication systems work, including user registration, login, password hashing, JWT authentication, protected routes, validation, and backend security middleware.

---

# Features

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Protected Routes
* PostgreSQL Database Integration
* Environment Variables with dotenv
* Input Validation using express-validator
* Rate Limiting
* Helmet Security Middleware
* MVC Project Structure

---

# Tech Stack

* Node.js
* Express.js
* PostgreSQL
* JWT (jsonwebtoken)
* bcrypt
* dotenv
* express-validator
* express-rate-limit
* helmet

---

# Project Structure

```bash
src/
│
├── controllers/
│   └── authController.js
│
├── db/
│   └── db.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── rateLimiter.js
│   └── validationMiddleware.js
│
├── routes/
│   └── authRoutes.js
│
├── utils/
│   └── generateToken.js
│
├── validators/
│   └── authValidator.js
│
├── app.js
└── server.js
```

---

# Installation

## Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

## Move Into Project Folder

```bash
cd auth-project
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

Add:

```env
PORT=5000

JWT_SECRET=myverysecretkey

DB_USER=postgres
DB_HOST=localhost
DB_NAME=authdb
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

---

# PostgreSQL Setup

Open PostgreSQL terminal:

```sql
CREATE DATABASE authdb;
```

Connect to database:

```sql
\c authdb
```

Create users table:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

---

# Run Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

# API Endpoints

## Register User

### POST

```http
/api/auth/register
```

### Request Body

```json
{
  "username": "Anu",
  "email": "anu@gmail.com",
  "password": "123456"
}
```

---

## Login User

### POST

```http
/api/auth/login
```

### Request Body

```json
{
  "email": "anu@gmail.com",
  "password": "123456"
}
```

---

## Protected Profile Route

### GET

```http
/api/auth/profile
```

### Headers

```http
token: YOUR_JWT_TOKEN
```

---

# Security Features

* Password hashing using bcrypt
* JWT authentication
* Protected routes
* Input validation
* Rate limiting
* Helmet security middleware
* Environment variable protection

---

# Future Improvements

* Refresh Tokens
* Logout System
* Role-Based Authentication
* Password Reset via Email
* Email Verification
* Docker Support
* Swagger Documentation
* React Frontend
* Prisma ORM
* Deployment to Render/Railway

---

# Learning Goals

This project was built to learn:

* Backend Development
* Authentication Systems
* Express Middleware
* PostgreSQL Integration
* API Security
* JWT Authentication
* MVC Architecture

---

# Author

Anushrita Dey

---
