import React from "react";
import { Route, Switch } from "react-router-dom";
import QuestionListPage from "./pages/QuestionListPage";
import NewQuestionPage from "./pages/NewQuestionPage";

import "./App.css";
import QuestionsProvider from './context/QuestionsProvider';

function App() {
  return (
    <QuestionsProvider>
      <main className="App">
        <header className="main-header">
          <section className="main-header-title">
            <h3>Trybe Questions</h3>
          </section>
        </header>
        <section className="main-section">
          <Switch>
            <Route exact path="/new-question" component={ NewQuestionPage } />
            <Route exact path="/" component={ QuestionListPage } />
          </Switch>
        </section>
      </main>
    </QuestionsProvider>
  );
}

export default App;
