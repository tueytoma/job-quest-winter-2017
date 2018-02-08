import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import HomePage from './components/Page/homePage'


injectGlobal`
  body {
    margin: 0;
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
