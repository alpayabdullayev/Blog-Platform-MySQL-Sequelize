const express = require("express");
const { createRole } = require("../../controller/roleController");


const RoleRouter = express.Router();

RoleRouter.post("/", createRole);

module.exports = RoleRouter;