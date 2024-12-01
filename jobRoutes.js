const express = require("express");
const { createJob, getJobs } = require("../controllers/jobController");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authenticateToken, createJob);
router.get("/", getJobs);

module.exports = router;
