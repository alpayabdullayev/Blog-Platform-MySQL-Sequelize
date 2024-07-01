const db = require("../db");

const createBlog = async (req, res, next) => {
  try {
    const blog = await db.Blog.create(req.body);
    res.status(201).json({ blog: blog, message: "Created", status: true });
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
};

const getAllBlog = async (req, res, next) => {
  try {
    const blogs = await db.Blog.findAll();
    res.json({ blogs: blogs, message: "Retrieved", status: true });
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
};

const getBlogById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const blog = await db.Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found", status: false });
    }
    res.json({ blog: blog, message: "Retrieved", status: true });
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
};

const updateBlog = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const blog = await db.Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found", status: false });
    }
    await blog.update({ title, description });
    res.json({ blog: blog, message: "Updated", status: true });
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
};

const deleteBlog = async (req, res, next) => {
  const { id } = req.params;
  try {
    const blog = await db.Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found", status: false });
    }
    await blog.destroy();
    res.json({ message: "Deleted", status: true });
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
};

module.exports = {
  createBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
