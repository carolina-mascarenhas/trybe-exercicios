import React from 'react';
import toDoContext from './ToDoContext';

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    }
  }

  addToDo = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }))
  }

  removeToDo = (oldTask) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task !== oldTask),
    }))
  }

  render() {
    const context = {
      ...this.state,
      addTask: this.addToDo,
      removeTask: this.removeToDo,
    }
    const { children } = this.props;
    return (
      <toDoContext.Provider value={ context }>
        { children }
      </toDoContext.Provider>
    )
  }
}

export default ToDo;
