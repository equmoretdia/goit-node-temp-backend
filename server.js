const mongoose = require("mongoose");

const app = require("./app");
const DB_HOST = require("./config");

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success");
    app.listen(3030, () => {
      console.log("Server running. Use our API on port: 3030");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
