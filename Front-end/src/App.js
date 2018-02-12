import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import HomePage from './components/pages/homePage'


injectGlobal`
  body {
    margin: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
` 

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
