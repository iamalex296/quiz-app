import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Quiz/Quiz';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/quiz'>
            <Quiz />
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
