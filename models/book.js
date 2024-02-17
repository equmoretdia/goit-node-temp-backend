const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    favotite: { type: Boolean, default: false },
    genre: {
      type: String,
      enum: [
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
      ],
      required: true,
    },
    date: {
      type: String,
      match: /^\d{2}-\d{2}-\d{4}$/,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

bookSchema.post("save", handleMongooseError);

const Book = model("book", bookSchema);

module.exports = Book;
