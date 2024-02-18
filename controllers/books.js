const { Book } = require("../models/book");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  // const allBooks = await Book.find();
  // const allBooks = await Book.find({
  //   author: "Marijn Haverbeke",
  // });
  // const allBooks = await Book.find({}, "title author");
  const allBooks = await Book.find({}, "-favotite");
  res.json(allBooks);
};

const getById = async (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const oneBook = await Book.findById(id);
  // const oneBook = await Book.findOne({ _id: id });
  if (!oneBook) {
    throw HttpError(404, "Not found");
    //   const error = new Error("Not found");
    //   error.status = 404;
    //   throw error;
    //   ***
    //   return res.status(404).json({ message: "Not found" });
  }
  res.json(oneBook);
};

const add = async (req, res) => {
  const newBook = await Book.create(req.body);
  res.status(201).json(newBook);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteId = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndDelete(id);
  // const result = await Book.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  // res.status(204).send()
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteId: ctrlWrapper(deleteId),
};
