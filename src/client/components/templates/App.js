import React from 'react';
import { reset } from 'styled-reset';
import Header from 'components/organisms/Header';
import { injectGlobal } from 'styled-components';

const App = props => {
  baseStyled();

  return (
    <div>
      <Header title={props.headerTitle} current={props.current} />
      {props.children}
    </div>
  );
};

const baseStyled = () => injectGlobal`
  ${reset}
  * { box-sizing: border-box; }
`;

module.exports = App;
