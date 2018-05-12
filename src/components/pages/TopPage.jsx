import React from 'react';
import App from 'components/templates/App';

export default class TopPage extends React.Component {
  render() {
    return (
      <App headerTitle='TopPage' current='top'>
        <div>TopPage</div>
      </App>
    )
  }
}
