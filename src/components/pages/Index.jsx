import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'react-express-sumple'
    }
  }
  render() {
    return (
      <div>
        title: { this.state.title }
      </div>
    );
  }
}

module.exports = Index;
