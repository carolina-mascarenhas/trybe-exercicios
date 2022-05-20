const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id
});

const getAll = async () => {
  const [test] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books'
  )
  return test.map(serialize);
}

module.exports = {
  getAll
}