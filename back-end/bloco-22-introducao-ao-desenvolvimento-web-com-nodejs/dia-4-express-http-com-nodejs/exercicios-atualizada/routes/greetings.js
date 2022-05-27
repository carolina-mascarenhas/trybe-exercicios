const express = require('express');

const routes = express.Router();

routes.post('/', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ message: `Hello, ${ name }!` })

  res.status(401).json({ message: "Unauthorized" });
});

module.exports = routes;