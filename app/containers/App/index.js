/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div `
  margin: 0 auto;
  min-height: 100%;
  padding: 30px 16px;
  background-color: white;
`;

export default function App() {
  return (
    <AppWrapper>
    here is App - index
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
