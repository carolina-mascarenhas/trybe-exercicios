const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
	const books = await Book.getAll();

	res.status(200).json(books);
})

app.get('/books/search', async (req, res) => {
	const { authorId } = req.query;
	const getByAuthorId = await Book.getByAuthorId(authorId);
	res.status(200).json(getByAuthorId);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});