import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Quiz/Quiz';


function App() {

  const [name, setName] = useState('');
  const [questions, setQuestions] = useState('');
  const [score, setScore] = useState(0);

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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home
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
            />
          </Route>
          <Route exact path='/result'>
            <Result />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
