import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import QuestionsContext from '../context/QuestionsContext';

function NewQuestionPage() {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const { addQuestion } = useContext(QuestionsContext);
  const history = useHistory();
  return (
    <section className="question-section">
      <form onSubmit={ (event) => {
        event.preventDefault();
        addQuestion(question, name);
        history.push('/');
      } }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
            value={ question }
            onChange={ ({ target: { value } }) => setQuestion(value) }
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            type="text"
            name="name"
            placeholder="Escreva seu nome..."
            id="user"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
