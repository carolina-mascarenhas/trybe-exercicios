const express = require('express');

const routes = express.Router();

routes.put('/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.json({ message: `Seu nome é ${ name } e você tem ${ age } anos de idade` });
});

module.exports = routes;