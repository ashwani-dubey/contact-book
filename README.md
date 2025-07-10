# Contact Book Application

## 🚀 Project Overview

This project is a **Contact Book** web application. It consists of a **Frontend** (React) and a **Backend** (Node.js with Express and MongoDB). The frontend interacts with the backend API to handle user authentication, CRUD operations for contacts, and more.

---

## ⚙️ Technologies Used

- **Frontend**:
  - React
  - React Router DOM (for routing)
  - Axios (for making HTTP requests)

- **Backend**:
  - Node.js
  - Express (web framework)
  - MongoDB (database)
  - Mongoose (ODM for MongoDB)
  - JWT (JSON Web Tokens) for authentication
  - bcryptjs (for password hashing)
  - CORS (to enable cross-origin requests)
  - dotenv (for environment variables)

- **Development Tools**:
  - Nodemon (auto-restart server during development)
  - Postman (API testing)

---

## 🔧 Getting Started

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-repo/contact-book.git
cd contact-book

## 2. Setup Frontend (React)

Step 1: Navigate to the frontend folder  
Command: cd frontend

Step 2: Install the required dependencies  
Command: npm install

Step 3: Start the React development server  
Command: npm start  
Your frontend will now be running at: http://localhost:3000

---

## 3. Setup Backend (Node.js + Express)

Step 1: Navigate to the backend folder  
Command: cd backend

Step 2: Install backend dependencies  
Command: npm install

Step 3: Create a .env file in the backend folder with the following content:  
PORT=5050  
MONGO_URI=mongodb://localhost:27017/contact-book  
JWT_SECRET=your_jwt_secret

Step 4: Start the backend server using Nodemon  
Command: npm run dev  
Your backend will now be running at: http://localhost:5050

---

## 🛠 How to Test the API Using Postman

### 🔐 POST /auth/login  
URL: http://localhost:5050/auth/login  
Method: POST  
Body:
{ "email": "user@example.com", "password": "password123" }

---

### 📝 POST /auth/register  
URL: http://localhost:5050/auth/register  
Method: POST  
Body:
{ "name": "John Doe", "email": "john@example.com", "password": "password123" }

---

### 📒 GET /contacts  
URL: http://localhost:5050/contacts  
Method: GET  
Headers: Authorization: Bearer <JWT_TOKEN>

---

### ➕ POST /contacts  
URL: http://localhost:5050/contacts  
Method: POST  
Headers: Authorization: Bearer <JWT_TOKEN>  
Body:
{ "name": "Alice", "phone": "123-456-7890", "email": "alice@example.com" }

---

## 🔐 Setting Authorization in Postman

1. Log in via POST /auth/login to get a JWT token.
2. Use that token in all protected routes.

Headers to set in Postman:  
Key: Authorization  
Value: Bearer <JWT_TOKEN>

---

## 🚀 Running in Production

- Deploy backend: Heroku, Render, or Railway  
- Deploy frontend: Netlify, Vercel, or GitHub Pages

---

## 💡 Additional Notes

- CORS error? Make sure the backend uses `cors` middleware.  
- Use MongoDB locally or via MongoDB Atlas.  
- For persistent sessions, use refresh tokens.

