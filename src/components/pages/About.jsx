import React from 'react';
import App from 'components/templates/App';

export default class About extends React.Component {
  render() {
    return (
      <App headerTitle='About' current='about'>
        <div>About</div>
      </App>
    )
  }
}
