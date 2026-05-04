# Club Resource API

## Description
This project extends the Student Management API with a new `Club` resource.
A Club represents a school club with its basic information.

## Club Fields
| Field | Type | Required | Description |
|---|---|---|---|
| name | String | Yes | Name of the club |
| category | String | Yes | Category of the club (e.g. Football, Music) |
| president | String | Yes | Name of the club president |
| members | Number | Yes | Number of members in the club |

## How to Run
```bash
cd BACK
npm run dev
```

## How to Test with Postman

### 1. Create an account
POST http://localhost:3000/api/students/signup
```json
{
  "name": "Kelyan",
  "email": "kelyan@gym.com",
  "password": "password123"
}
```

### 2. Login to get a token
POST http://localhost:3000/api/students/login
```json
{
  "email": "kelyan@gym.com",
  "password": "password123"
}
```

### 3. Use the token in all club requests
Add to Authorization header: `Bearer <your-token>`

## Club Routes
| Method | Route | Description | Auth Required |
|---|---|---|---|
| GET | /api/clubs | Get all clubs | Yes |
| GET | /api/clubs/:id | Get one club | Yes |
| POST | /api/clubs | Create a club | Yes |
| PUT | /api/clubs/:id | Update a club | Yes |
| DELETE | /api/clubs/:id | Delete a club | Yes |