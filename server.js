const express = require("express");
const dotenv = require("./config/dotenv");
const dbConnect = require("./config/db");
const authRoutes = require("./authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

// Initialize dotenv
dotenv();

// Initialize Express
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Database Connection
dbConnect();

// Routes
app.use("/api/auth", authRoutes); // Authentication Routes
app.use("/api/profile", profileRoutes); // Profile Routes
app.use("/api/jobs", jobRoutes); // Job Routes
app.use("/api/applications", applicationRoutes); // Application Routes

// Default Route
app.get("/", (req, res) => {
  res.send("Job Portal API is running...");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
