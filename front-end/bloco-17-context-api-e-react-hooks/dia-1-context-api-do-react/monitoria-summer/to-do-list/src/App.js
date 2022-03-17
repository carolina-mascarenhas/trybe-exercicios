import './App.css';
import Form from './Form';
import ToDo from './context/ToDo';

function App() {
  return (
    <div>
      <ToDo>
        <Form />
      </ToDo>
    </div>
  );
}

export default App;
