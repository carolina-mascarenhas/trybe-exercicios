const Joi = require('joi');

const schema = Joi.object({
  cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required()
});

const validation = (req, res, next) => {
  const { error } = schema.validate(req.body)

  if (!error) return next();

  const messages = error.details.map((e) => e.message)
  res.status(400).json({ "error": { "code": "invalidData", "message": messages[0] } });
}

module.exports = validation;