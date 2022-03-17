import React from 'react';
import toDoContext from './context/ToDoContext';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  handleChange = ({target: {value}}) => {
    this.setState({
      input: value
    })
  }

  render() {
    const { addTask } = this.context
    return (
      <div>
        <h2>To-do List</h2>

        <input
          type="text"
          onChange={ this.handleChange }
        />

        <button
          onClick={ addTask(this.state.input) }
        >
          Adicionar
        </button>
      </div>
    )
  }
}

Form.contextType = toDoContext;

export default Form;
