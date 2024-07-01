const db = require("../db");

const createRole = async (req, res, next) => {
  try {
    const role = await db.Role.create(req.body);
    res.status(201).json({ role: role, message: "Created", status: true });
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
};

module.exports = { createRole };
