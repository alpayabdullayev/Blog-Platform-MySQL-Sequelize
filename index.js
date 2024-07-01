const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./src/db");
const router = require("./src/routes");
const errorHandler = require("./src/middleware/errorHandler");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);


app.use(errorHandler);

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
  db.sequelize.sync();
  //   db.sequelize.sync({ force: true }).then(() => {
  //     console.log('Database & tables created!');
  //   });
});
