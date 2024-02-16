const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Sergey:Qwerty123SB999@cluster0.wqkgciu.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success");
    app.listen(3030, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
