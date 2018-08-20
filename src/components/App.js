import React, { Component } from 'react';
import { injectGlobal } from 'emotion';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './HomePage';

// GLOBAL theme

injectGlobal`

  body {
    background-color : #3C1041 !important;
  }

  h1 {
    backround: yellow !important;
    padding: 40px;
  }

  * {
    box-sizing: border-box;
  }

`;

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
