const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (req, res, next) => {
	const books = await Book.getAll();

	res.status(200).json(books);
})

app.get('/books/:author_id', async (req, res, next) => {
	const { author_id } = req.params;
	const books = await Book.getAll();

	const byAuthorId = books.filter((obj) => obj.author_id === parseInt(author_id));

	res.status(200).json(byAuthorId);
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});