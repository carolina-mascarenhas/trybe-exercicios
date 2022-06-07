const express = require('express');

const app = express();

app.use(express.json());

app.use('/books', require('./controlers/BooksControler'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}!`);
});