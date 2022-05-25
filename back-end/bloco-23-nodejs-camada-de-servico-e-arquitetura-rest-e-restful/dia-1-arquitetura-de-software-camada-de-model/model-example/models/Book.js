const connection = require('./connection');

const serialize = ({id, title, author_id}) => ({
  id,
  title,
  authorId: author_id
})

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books');
  return books.map(serialize);
}

const getByAuthorId = async (id) => {
  const result = await getAll()
  return result.filter((obj) => obj.authorId == id)
}

module.exports = {
  getAll,
  getByAuthorId
}