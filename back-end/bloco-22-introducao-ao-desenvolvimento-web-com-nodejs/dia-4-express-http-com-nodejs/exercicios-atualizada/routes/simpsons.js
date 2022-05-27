const express = require('express');
const fs = require('fs').promises;

const routes = express.Router();

routes.get('/', async (req, res) => {
  const contentFile = await fs.readFile('./db/simpsons.json', 'utf-8');
  const arr = JSON.parse(contentFile);

  res.json(arr);
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;

  const contentFile = await fs.readFile('./db/simpsons.json', 'utf-8');
  const arr = JSON.parse(contentFile);

  const findById = arr.find((obj) => obj.id === id);

  if (!findById) return res.status(404).json({ message: 'simpson not found' })

  res.json(findById);
});

routes.post('/', async (req, res) => {
  const { id, name } = req.body;

  const contentFile = await fs.readFile('./db/simpsons.json', 'utf-8');
  const arr = JSON.parse(contentFile);

  const checkForId =  arr.some((obj) => obj.id === id);

  if (checkForId === true) return res.status(409).json({ message: 'id already exists' })

  arr.push({ id, name });
  fs.writeFile('./db/simpsons.json', JSON.stringify(arr));

  res.status(204).end();
});

module.exports = routes;