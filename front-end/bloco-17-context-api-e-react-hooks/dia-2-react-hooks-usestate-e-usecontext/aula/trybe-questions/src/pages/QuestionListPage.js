import React from "react";
import QuestionList from "../components/QuestionList";

function QuestionListPage({ history }) {

  function handleClickNextPage() {
    history.push("/new-question");
  }

  return (
    <section>
      <QuestionList />
      <button type="button" onClick={ handleClickNextPage }>
        Nova Pergunta
      </button>
    </section>
  );
}

export default QuestionListPage;
