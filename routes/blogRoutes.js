const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/blog");

router.post("/", createBlog);
module.exports = router
