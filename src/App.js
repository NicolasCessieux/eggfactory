import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Kitchen from './components/Kitchen';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Kitchen} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
