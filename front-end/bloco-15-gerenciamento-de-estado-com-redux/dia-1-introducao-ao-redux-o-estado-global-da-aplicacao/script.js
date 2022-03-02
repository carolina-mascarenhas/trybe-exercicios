const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const randomColorButton = document.querySelector('#random');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const action1 = {type: 'NEXT_COLOR'}
const action2 = {type: 'PREVIOUS_COLOR'}
const action3 = {type: 'RANDOM_COLOR'}

function reducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      } 
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      } 
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }
    default:
      return state
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

previousButton.addEventListener('click', () => {
  store.dispatch(action2);
});
nextButton.addEventListener('click', () => {
  store.dispatch(action1);
});
randomColorButton.addEventListener('click', () => {
  store.dispatch(action3);
});

store.subscribe(() => {
  const state = store.getState();

  const span = document.querySelector('#value');
  const div = document.querySelector('#container');
  span.innerHTML = state.colors[state.index];
  div.style.backgroundColor = state.colors[state.index];
});
