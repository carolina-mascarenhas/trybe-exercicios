const fs = require('fs');

const leArquivo = (arquivo) => {
  try {
    return fs.readFileSync(arquivo, 'utf-8');
  } catch (error) {
    return null;
  }
}

module.exports = leArquivo;