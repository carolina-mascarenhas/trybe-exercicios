const connection = require('./connection');

const add = async (bairro, localidade, uf) => {
  const query = `INSERT INTO bairros(bairro, localidade, uf) VALUES
  (?, ?, ?)`
  const [add] = await connection.execute(query, [bairro, localidade, uf]);

  return {
    id: add.insertId
  }
}

module.exports = {
  add,
}