import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <Wrap>
      <Lists>
        <List className={props.current === 'top' ? 'current' : ''}>
          <RouteLink to="/">TOP</RouteLink>
        </List>
        <List className={props.current === 'about' ? 'current' : ''}>
          <RouteLink to="/about">ABOUT</RouteLink>
        </List>
        <List className={props.current === 'link' ? 'current' : ''}>
          <RouteLink to="/link">LINK</RouteLink>
        </List>
      </Lists>
    </Wrap>
  );
};

const Wrap = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 34px;
`;

const Lists = styled.ul`
  height: 34px;
  margin: 0 auto;
  padding: 0;
`;

const List = styled.li`
  display: inline-block;
  width: 33.33%;
  margin: 0 auto;
  border: 1px solid #08f;
  border-top: none;
  border-bottom: none;
  text-align: center;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`;
const RouteLink = styled(Link)`
  display: block;
  line-height: 34px;
  color: #fff;
  text-decoration: none;
`;

module.exports = Navigation;
