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
  background: linear-gradient(175deg, #aef, #6df, 60%, #0ae, 0%, #fcc);
`;

const Title = styled.h1`
  font-size: 21px;
  font-weight: bold;
  line-height: 55px;
  color: #003;
  text-align: center;
`;

module.exports = Header;
