# Project Overview
Project Structure
serverSideJs/
├── index.js                        # Entry point — sets up Express, middleware, and routes
├── students.js                     # Exports student data from students.json
├── students.json                   # Local data source (acts as a mock database)
├── package.json
│
├── routes/
│   └── studentsRoute.js            # Defines all /students endpoints
│
├── controllers/
│   └── studentsControllers.js      # Handles req/res for each route
│
├── services/
│   └── studentsService.js          # Business logic and data validation
│
└── FONT/
    ├── index.html                  # Frontend HTML
    ├── script.js                   # Fetches and renders student cards
    └── style.css                   # Styling



## API ENDPOINTS

Base URL: http://localhost:3000

Method	Endpoint	Description
GET	/students	Get all students
GET	/students/:id	Get a single student by ID
POST	/students	Create a new student
PUT	/students/:id	Update an existing student
DELETE	/students/:id	Delete a student


## How it runs

1. The server is started using `node index.js`
2. It listens for incoming requests on port 3000
3. When a request comes in, it checks the path





## Expected output

### Alice Martin

- **Email:** alice.martin@epita.fr
- **Major:** Computer Science
- **GPA:** 3.8
- **ID:** 1
  ...
# Student Report

Generated on: 20/03/2026