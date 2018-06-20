import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TopPage from 'components/pages/TopPage';
import About from 'components/pages/About';
import Link from 'components/pages/Link';

// import '../assets/css/reset.css';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={TopPage} />
          <Route path="/about" component={About} />
          <Route path="/link" component={Link} />
        </div>
      </BrowserRouter>
    );
  }
}
