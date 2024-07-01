const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Blog = require("../models/blogModels")(sequelize, Sequelize.DataTypes);
db.Role = require("../models/roleModels")(sequelize, Sequelize.DataTypes);



module.exports = db;
