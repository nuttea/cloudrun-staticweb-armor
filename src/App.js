import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

export default function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Router>
  );
}

function Home () {
  return <h2>Home</h2>;
}

function About () {
  return <h2>About</h2>;
}

function Users () {
  return <h2>Users</h2>;
}
