const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const genreList = [
  "Fiction",
  "Non-fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Historical Fiction",
  "Horror",
  "Biography",
  "Autobiography",
  "Memoir",
  "Self-help",
  "Travel",
  "Cooking",
  "Poetry",
  "Drama",
  "Comedy",
  "Satire",
  "Adventure",
];
const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    favotite: { type: Boolean, default: false },
    genre: {
      type: String,
      enum: genreList,
      required: true,
    },
    date: {
      type: String,
      match: dateRegexp,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

bookSchema.post("save", handleMongooseError);

const Book = model("book", bookSchema);

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favotite: Joi.boolean(),
  genres: Joi.string()
    .validate(...genreList)
    .required(),
  date: Joi.string().pattern(dateRegexp).required(),
});

const schemas = { addSchema };

module.exports = { Book, schemas };
