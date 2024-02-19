const mongoose = require("mongoose");

const app = require("./app");
const { DB_HOST, PORT } = process.env;
// const DB_HOST = require("./config");

mongoose.set("strictQuery", true);

// console.log(process.env);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success");
    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
