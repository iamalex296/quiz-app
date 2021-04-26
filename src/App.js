import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';


function App() {

  const [name, setName] = useState('');
  const [questions, setQuestions] = useState('');
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const fetchQuestions = async(category='', difficulty='') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
    // console.log('Data', data)
  };

  return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home
              setScore={setScore}
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route exact path='/quiz'>
            <Quiz 
              name={name}
              questions={questions}
              setQuestions={setQuestions}
              score={score}
              setScore={setScore}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
            />
          </Route>
          <Route exact path='/result'>
            <Result
              name={name} 
              score={score} 
              currentQuestion={currentQuestion}
            />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
