const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST } = process.env;
const { PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log("error 1", error.message);
    process.exit(1);
  });
