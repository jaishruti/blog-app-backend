const Blog = require("../models/BlogPost");

exports.createBlog = async (req, res) => {
  try {
    const { title, content, author, likes, comments } = req.body;
    const newblog = await Blog.create({
      title,
      content,
      author,
      likes,
      comments,
    });
    res.status(200).json({ success: true, data: newblog });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
