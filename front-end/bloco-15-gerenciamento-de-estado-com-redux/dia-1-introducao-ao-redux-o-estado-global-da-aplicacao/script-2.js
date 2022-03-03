const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'CHANGE_NAME_1':
      return {
        ...state,
        nome: action.name,
        sobrenome: action.lastName,
      } 
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'CHANGE_NAME_2':
      return {
        ...state,
        nome: action.name,
        sobrenome: action.lastName,
      } 
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({meuPrimeiroReducer, meuSegundoReducer});

const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.onload = () => {
  setTimeout(() => {
    store.dispatch({type: 'CHANGE_NAME_1', name: 'Barbara', lastName: 'Lara'});
    store.dispatch({type: 'CHANGE_NAME_2', name: 'João', lastName: 'Gaspar'});
  }, 3000);
};

store.subscribe(() => {
  const state = store.getState();

  const name1 = document.querySelector('#nome-1');
  const lastName1 = document.querySelector('#sobrenome-1');
  const name2 = document.querySelector('#nome-2');
  const lastName2 = document.querySelector('#sobrenome-2');

  name1.innerHTML = state.meuPrimeiroReducer.nome;
  lastName1.innerHTML = state.meuPrimeiroReducer.sobrenome;
  name2.innerHTML = state.meuSegundoReducer.nome;
  lastName2.innerHTML = state.meuSegundoReducer.sobrenome;
});
