const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const register = async (req, res) => {
  const { email } = req.body;
  const registeredEmail = await User.findOne({ email });
  if (registeredEmail) {
    throw HttpError(
      409,
      "User with submitted email has been registered already"
    );
  }
  const newUser = await User.create(req.body);
  res.status(201).json({ name: newUser.name, email: newUser.email });
};

module.exports = {
  register: ctrlWrapper(register),
};
