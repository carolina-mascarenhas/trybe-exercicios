const cepValidation = (req, res, next) => {
  const { cep } = req.params;

  const cepRegex = /\d{5}-?\d{3}/;

  if (!cepRegex.test(cep)) return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } })

  next();
}

module.exports = cepValidation;