const connection = require('./connection');

const getCep = (cep) => connection.execute('SELECT * FROM ceps WHERE cep = ?;', [cep]);

const addCep = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO ceps(cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  const [retorno] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  };
}

module.exports = {
  getCep,
  addCep,
}