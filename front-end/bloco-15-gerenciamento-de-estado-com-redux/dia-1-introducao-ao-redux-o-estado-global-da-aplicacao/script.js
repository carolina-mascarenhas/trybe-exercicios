const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const action1 = {type: 'NEXT_COLOR'}
const action2 = {type: 'PREVIOUS_COLOR'}

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
})

store.subscribe(() => {
  const state = store.getState();

  const span = document.querySelector('#value');
  const div = document.querySelector('#container');
  span.innerHTML = state.colors[state.index];
  div.style.backgroundColor = state.colors[state.index];
});