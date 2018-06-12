import React from 'react';
import App from 'components/templates/App';

const About = () => {
  return (
    <App headerTitle="About" current="about">
      <div>About</div>
      <div> values </div>
      <button
        onClick={() => {
          console.log(this);
        }}
      >
        click
      </button>
    </App>
  );
};

module.exports = About;
