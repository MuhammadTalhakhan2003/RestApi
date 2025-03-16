# Express User Management API

This is a simple **REST API** built with **Express.js** that performs CRUD operations on user data stored in `MOCK_DATA.json`.

## Features
- **GET /users** → Retrieve all users  
- **GET /api/users/:id** → Retrieve a specific user by ID  
- **POST /api/users** → Add a new user  
- **PATCH /api/users/:id** → Update a user  
- **DELETE /api/users/:id** → Delete a user  

---

## 📌 Installation & Setup 
```sh

npm install
3️⃣ Start the Server
sh

node index.js
The API runs at http://localhost:3000/.

📌 API Endpoints
1️⃣ Get All Users
📌 GET /users
Returns a list of all users.
Example Response:

json

[
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  }
]
2️⃣ Get User by ID
📌 GET /api/users/:id
Returns user details for the given ID.
Example Request:

http

GET /api/users/1
Example Response:

json

{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com"
}
3️⃣ Add a New User
📌 POST /api/users
Creates a new user.
Example Request:

http

POST /api/users
Content-Type: application/json

{
  "first_name": "Alice",
  "last_name": "Smith",
  "email": "alice.smith@example.com"
}
Example Response:

json

{
  "status": "User created successfully",
  "id": 101
}
4️⃣ Update a User
📌 PATCH /api/users/:id
Updates an existing user.
Example Request:

http

PATCH /api/users/1
Content-Type: application/json

{
  "email": "new.email@example.com"
}
Example Response:

json

{
  "status": "User updated successfully",
  "user": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "new.email@example.com"
  }
}
5️⃣ Delete a User
📌 DELETE /api/users/:id
Removes a user from the database.
Example Request:

http

DELETE /api/users/1
Example Response:
json
{
  "status": "User deleted successfully"
}
📌 Technologies Used
Node.js
Express.js
JSON File Storage (fs module)
📌 Notes
Ensure that MOCK_DATA.json exists and is properly formatted as an array.
The API automatically assigns an id to new users.
PATCH requests only update provided fields without affecting others.
📌 License
This project is MIT licensed.Created By HumSabKaCodingChannel
