import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Kitchen from './components/Kitchen';
import Result from './components/Result';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Kitchen />
          <Switch>
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/result" component={Result} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
