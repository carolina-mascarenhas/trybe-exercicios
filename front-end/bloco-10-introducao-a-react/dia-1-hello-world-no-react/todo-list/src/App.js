import React from 'react';

const arrOfTasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Estudar'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>To do List</h1>
        <ul>
          { arrOfTasks.map((task) => Task(task))}
        </ul>
      </div>
    );
  }
}

export default App;
