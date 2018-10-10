import * as React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './Pages/Home';
import Login from './Pages/Login';

injectGlobal`
  body {
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 16px;
    position: relative;
  }
`;

const Container = styled.div`
`;

const renderFunction = ({ location }: { location: any }) : React.ReactNode => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames='fade' timeout={300}>
      <Switch location={location}>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/login' component={Login} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);

const App: React.SFC<{}> = () => (
  <Container>
    <Router>
      <Route render={renderFunction} />
    </Router>
  </Container>
);

export default hot(module)(App);
