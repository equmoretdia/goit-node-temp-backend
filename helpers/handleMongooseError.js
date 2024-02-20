const handleMongooseError = (error, data, next) => {
  // console.log(error);
  // console.log(error.name);
  error.status = 400;
  // const { name, code } = error;
  // const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  // error.status = status;
  // error.message = ""
  next();
};

module.exports = handleMongooseError;
