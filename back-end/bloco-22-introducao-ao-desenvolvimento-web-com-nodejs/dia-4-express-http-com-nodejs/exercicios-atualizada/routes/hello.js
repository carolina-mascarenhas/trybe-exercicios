const express = require('express');

const routes = express.Router();

routes.post('/', (req, res) => {
  const { name } = req.body;

  res.json({ message: `Hello, ${ name }!` });
});

module.exports = routes;