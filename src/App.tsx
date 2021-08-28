import React from 'react';
import Navbar from './components/Navbar';
import Current from './components/Current';
import Select from './components/Select';
import Result from './components/Result';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Current />
        </Route>
        <Route path='/current'>
          <Current />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/history/select'>
          <Select />
        </Route>
        <Route path='/history/result'>
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
