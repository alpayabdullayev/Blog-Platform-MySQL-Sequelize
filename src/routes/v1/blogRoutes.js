const express = require("express");
const {
  createBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../../controller/blogController");

const BlogRouter = express.Router();

BlogRouter.post("/", createBlog);
BlogRouter.get("/", getAllBlog);
BlogRouter.get("/:id", getBlogById);
BlogRouter.put("/:id", updateBlog);
BlogRouter.delete("/:id", deleteBlog);

module.exports = BlogRouter;
