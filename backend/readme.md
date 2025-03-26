# API Documentation

## Base URL
```
http://localhost:<PORT>/api
```

## Endpoints
## User routes
### Register User
**URL:** `/register`  
**Method:** `POST`  
**Description:** Registers a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Responses:**
- **201 Created**
  ```json
  {
    "message": "User registered successfully",
    "token": "string"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```
  or
  ```json
  {
    "message": "User already exists"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Login User
**URL:** `/login`  
**Method:** `POST`  
**Description:** Logs in an existing user.

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Responses:**
- **200 OK**
  ```json
  {
    "message": "User logged in successfully",
    "token": "string"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```
  or
  ```json
  {
    "message": "Invalid email or password"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Logout User
**URL:** `/logout`  
**Method:** `GET`  
**Description:** Logs out the current user.

**Responses:**
- **200 OK**
  ```json
  {
    "message": "User logged out successfully"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Get User Profile
**URL:** `/profile`  
**Method:** `GET`  
**Description:** Retrieves the profile of the authenticated user.

**Headers:**
- `Authorization: Bearer <token>`

**Responses:**
- **200 OK**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    // other user profile fields
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Update User Profile
**URL:** `/update-profile`  
**Method:** `PUT`  
**Description:** Updates the profile of the authenticated user.

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

**Responses:**
- **200 OK**
  ```json
  {
    "message": "User profile updated successfully",
    "user": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      // other user profile fields
    }
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```
  
  ---


## Expenses routes
### Add Expense
**URL:** `/expense/add`  
**Method:** `POST`  
**Description:** Adds a new expense for the authenticated user.

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "amount": 100,
  "category": "Food",
  "description": "Lunch",
  "date": "2023-10-01T00:00:00.000Z"
}
```

**Responses:**
- **201 Created**
  ```json
  {
    "message": "Expense added successfully",
    "expense": {
      "amount": 100,
      "category": "Food",
      "description": "Lunch",
      "date": "2023-10-01T00:00:00.000Z"
    }
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid amount",
        "param": "amount",
        "location": "body"
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Get All Expenses
**URL:** `/expense/all`  
**Method:** `GET`  
**Description:** Retrieves all expenses for the authenticated user.

**Headers:**
- `Authorization: Bearer <token>`

**Responses:**
- **200 OK**
  ```json
  {
    "expenses": [
      {
        "amount": 100,
        "category": "Food",
        "description": "Lunch",
        "date": "2023-10-01T00:00:00.000Z"
      },
      {
        "amount": 50,
        "category": "Transport",
        "description": "Bus fare",
        "date": "2023-10-02T00:00:00.000Z"
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Update Expense
**URL:** `/expense/update/:id`  
**Method:** `PUT`  
**Description:** Updates an existing expense for the authenticated user.

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "amount": 150,
  "category": "Food",
  "description": "Dinner",
  "date": "2023-10-01T00:00:00.000Z"
}
```

**Responses:**
- **200 OK**
  ```json
  {
    "message": "Expense updated successfully",
    "expense": {
      "amount": 150,
      "category": "Food",
      "description": "Dinner",
      "date": "2023-10-01T00:00:00.000Z"
    }
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid amount",
        "param": "amount",
        "location": "body"
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Delete Expense
**URL:** `/expense/delete/:id`  
**Method:** `DELETE`  
**Description:** Deletes an existing expense for the authenticated user.

**Headers:**
- `Authorization: Bearer <token>`

**Responses:**
- **200 OK**
  ```json
  {
    "message": "Expense deleted successfully"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### AI routes
### Get Financial Insights
**URL:** `/ai/insights`  
**Method:** `POST`  
**Description:** Generates financial insights based on the user's expenses.

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "expenses": [
    {
      "amount": 100,
      "category": "Food",
      "description": "Lunch",
      "date": "2023-10-01T00:00:00.000Z"
    },
    {
      "amount": 50,
      "category": "Transport",
      "description": "Bus fare",
      "date": "2023-10-02T00:00:00.000Z"
    }
  ]
}
```

**Responses:**
- **200 OK**
  ```json
  {
    "insights": "Based on your expenses, here are some financial insights..."
  }
  ```
- **400 Bad Request**
  ```json
  {
    "message": "Invalid request body"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Analytics routes
### Get Monthly Summary
**URL:** `/analytics/monthly-summary`  
**Method:** `GET`  
**Description:** Retrieves the monthly summary of expenses for the authenticated user.

**Headers:**
- `Authorization: Bearer <token>`

**Responses:**
- **200 OK**
  ```json
  {
    "monthlySummary": [
      {
        "month": "January",
        "year": 2023,
        "total": 500
      },
      {
        "month": "February",
        "year": 2023,
        "total": 450
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Get Category Summary
**URL:** `/analytics/category-summary`  
**Method:** `GET`  
**Description:** Retrieves the category summary of expenses for the authenticated user.

**Headers:**
- `Authorization: Bearer <token>`

**Responses:**
- **200 OK**
  ```json
  {
    "categorySummary": [
      {
        "category": "Food",
        "total": 300
      },
      {
        "category": "Transport",
        "total": 200
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Middleware

**Auth Middleware**

**Description:** Middleware to authenticate users using JWT tokens.

**Usage:** Add `authMiddleware` to routes that require authentication.

**Example:**
```javascript
import { authMiddleware } from './middleware/auth.middleware.js';

router.get('/profile', authMiddleware, userController.getUserProfile);
```

