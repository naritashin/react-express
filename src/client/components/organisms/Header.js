import React from 'react';
import Navigation from 'components/molcules/Navigation';
import styled from 'styled-components';

const Header = props => {
  return (
    <Wrap>
      <Title>{props.title}</Title>
      <Navigation current={props.current} />
    </Wrap>
  );
};

const Wrap = styled.header`
  width: 100%;
  border: 1px solid #ccc;
  background-color: #0cf;
`;

const Title = styled.h1`
  font-size: 21px;
  line-height: 55px;
  color: #fff;
  text-align: center;
`;

module.exports = Header;
