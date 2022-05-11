const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

const imc = weight / (height ** 2);
console.log('Seu imc é:', imc);

if (imc < 18.5) {
  console.log('Situação: Abaixo do peso')
} else if (imc > 18.5 && imc < 24.9) {
  console.log('Situação: Peso normal')
} else if (imc > 25 && imc < 29.9) {
  console.log('Situação: Acima do peso')
} else if (imc > 30 && imc < 34.9) {
  console.log('Situação: Obesidade grau I')
} else if (imc > 35 && imc < 39.9) {
  console.log('Situação: Obesidade grau II')
} else {
  console.log('Situação: Obesidade graus III e IV')
}