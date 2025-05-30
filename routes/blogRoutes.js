const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/blog");
const { likeUnlikeBlogPost } = require("../controllers/blog");

router.post("/", createBlog);
router.put("/like/:id", likeUnlikeBlogPost);
module.exports = router;
