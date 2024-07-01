const express = require("express");
const BlogRouter = require("./blogRoutes");
const RoleRouter = require("./roleRoutes");

const v1Router = express.Router();

v1Router.use("/blogs", BlogRouter);
v1Router.use("/roles", RoleRouter);

module.exports = v1Router;
