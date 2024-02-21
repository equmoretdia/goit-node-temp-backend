const bcrypt = require("bcrypt");

const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const registeredEmail = await User.findOne({ email });
  if (registeredEmail) {
    throw HttpError(
      409,
      "User with submitted email has been registered already"
    );
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({ name: newUser.name, email: newUser.email });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid.");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid.");
  }
  const token = "";
  res.json({ token });
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};
