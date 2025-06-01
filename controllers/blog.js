// const BlogPost = require("../models/BlogPost");
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

exports.likeUnlikeBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const post = await Blog.findById(id);
    console.log(id);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    // check if post is like by th user then unlike the post otherwise add to likes
    if (post.likes.includes(userId)) {
      // remove from likes - unlike
      console.log(userId);
      post.likes = post.likes.filter((like) => like.toString() !== userId);
      console.log(post.likes);
      await post.save();
      return res.status(200).json({ success: true, message: "Post unliked" });
    } else {
      // add to likes - like post
      post.likes.push(userId);
      await post.save();
      return res.status(200).json({ success: true, message: "Post liked" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.commentPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, comment } = req.body;
    const post = await Blog.findById(id);
    console.log(post, id);
    if (!post)
      return res
        .status(404)
        .json({ success: false, message: "post not found" });
    console.log(post.comments);
    post.comments.push({ user: userId, text: comment });
    await post.save();
    return res
      .status(200)
      .json({ success: true, message: "comment successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
