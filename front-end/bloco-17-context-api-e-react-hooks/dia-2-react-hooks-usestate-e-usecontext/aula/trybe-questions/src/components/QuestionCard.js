import React, { useState } from "react";

function QuestionCard({ question }) {
  const [claps, setClaps] = useState(0);

  function handleClaps() {
    setClaps(prevState => prevState + 1);
  }

  return (
    <section className="question-card">
      <header className="question-card-header">
        <img
          className="question-card-image"
          src="https://i.pinimg.com/564x/fe/43/dd/fe43dde6d650b6d31ab47a1e01714b65.jpg"
          alt=""
        />
        { question.name }
      </header>
      <p className="question-card-body">{ question.question }</p>

      <p className="question-card-claps">
        <span
          role="img"
          aria-label="increase-claps"
          onClick={ handleClaps }
        >
          👏
        </span>
        { claps } Palmas
      </p>
    </section>
  );
}

export default QuestionCard;
