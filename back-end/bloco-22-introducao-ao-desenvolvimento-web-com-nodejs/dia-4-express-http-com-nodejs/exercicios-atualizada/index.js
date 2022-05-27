const express = require('express');

const app = express();

app.use(express.json());

app.use('/ping', require('./routes/ping'));

app.use('/hello', require('./routes/hello'));

app.use('/greetings', require('./routes/greetings'));

app.use('/users', require('./routes/users'));

app.use('/simpsons', require('./routes/simpsons'));

const PORT = 3010;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});




// Crie uma rota POST /greetings 🚀
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.

// Crie uma rota PUT /users/:name/:age. 🚀
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

// Crie uma API de dados das personagens de Simpsons 🚀
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
// [
//   {
//     "id": "1",
//     "name": "Homer Simpson"
//   },
//   {
//     "id": "2",
//     "name": "Marge Simpson"
//   },
//   {
//     "id": "3",
//     "name": "Bart Simpson"
//   },
//   {
//     "id": "4",
//     "name": "Lisa Simpson"
//   },
//   {
//     "id": "5",
//     "name": "Maggie Simpson"
//   },
//   {
//     "id": "6",
//     "name": "Ned Flanders"
//   },
//   {
//     "id": "7",
//     "name": "Montgomery Burns"
//   },
//   {
//     "id": "8",
//     "name": "Nelson Muntz"
//   },
//   {
//     "id": "9",
//     "name": "Krusty"
//   },
//   {
//     "id": "10",
//     "name": "Milhouse Van Houten"
//   }
// ]

// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK.

// Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.

// Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.

// Crie um endpoint POST /simpsons. 🚀
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.