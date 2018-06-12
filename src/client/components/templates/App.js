import React from 'react';
import { reset } from 'styled-reset';
import Header from 'components/organisms/Header';
import styled, { injectGlobal } from 'styled-components';

const baseStyled = () => injectGlobal`
  ${reset}
  * { box-sizing: border-box; }
`;

const App = props => {
  baseStyled();

  return (
    <div>
      <Header title={props.headerTitle} current={props.current} />
      {props.children}
    </div>
  );
};

module.exports = App;
