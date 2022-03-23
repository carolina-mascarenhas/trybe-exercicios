import React, { useState } from 'react';
import QuestionsContext from './QuestionsContext';

function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      name: 'Hermione',
      question: 'Como fazer a poção polissuco?',
      claps: 7
    }
  ]);

  const addQuestion = (question, name) => {
    setQuestions([...questions, {
      question,
      name,
      id: questions.length + 1,
      claps: 0,
    }])
  }

  const contextValue = {
    questions,
    addQuestion,
  }

  return (
    <QuestionsContext.Provider value={ contextValue }>
      { children }
    </QuestionsContext.Provider>
  )
}

export default QuestionsProvider;
