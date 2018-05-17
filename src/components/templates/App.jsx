import React from 'react';
import Header from 'components/organisms/Header';

export default class App extends React.Component {
  render() {
    return (
      <html lang='ja'>
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>react-express-sample</title>
          <link rel="stylesheet" href="/css/reset.css" />
        </head>
        <body>
          <Header title={ this.props.headerTitle } current={ this.props.current } />
          { this.props.children }
        </body>
      </html>
    )
  }
};
