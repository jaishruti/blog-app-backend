const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/blog");
const { likeUnlikeBlogPost } = require("../controllers/blog");
const { commentPost } = require("../controllers/blog");

router.post("/", createBlog);
router.put("/like/:id", likeUnlikeBlogPost);
// router.put("/like/:id", likeUnlikeBlogPost);
router.put("/comment/:id", commentPost);
module.exports = router;
