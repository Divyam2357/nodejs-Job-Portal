Job Portal API
A robust job portal backend built with Node.js, Express, and MongoDB. This API supports user registration, authentication, job postings, profile management, and job applications. Employers can post jobs, and job seekers can apply to them.

Features
User Management:

Registration (Job Seeker or Employer)
Login with JWT-based authentication
Profile creation and update (including resume uploads)
Job Management:

Employers can post and manage job listings
Job seekers can view and search for jobs
Application Management:

Job seekers can apply to jobs
Employers can review and update application statuses
File Uploads:

Resumes are uploaded and stored on Cloudinary
Security:

Passwords are hashed with bcrypt
JWT-based authentication
Role-based access control (Job Seeker / Employer)
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (Mongoose for schema definitions)
Authentication: JSON Web Tokens (JWT)
File Uploads: Multer and Cloudinary
Environment Variables: dotenv
Project Structure
bash
Copy code
.
├── server.js                # Main entry point
├── config
│   ├── database.js          # MongoDB connection setup
│   └── cloudinary.js        # Cloudinary configuration
├── models
│   ├── User.js              # User schema
│   ├── Job.js               # Job schema
│   └── Application.js       # Application schema
├── routes
│   ├── auth.js              # Authentication routes
│   ├── profile.js           # Profile management routes
│   ├── jobs.js              # Job-related routes
│   └── applications.js      # Application-related routes
├── middlewares
│   └── authenticateToken.js # JWT authentication middleware
├── uploads                  # Temporary file storage (if needed)
├── .env                     # Environment variables file
├── package.json             # Node.js dependencies
└── README.md                # Project documentation
Installation
Prerequisites
Node.js installed on your system
MongoDB Atlas or a local MongoDB instance
Cloudinary account for file uploads
