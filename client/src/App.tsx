import * as React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { hot } from 'react-hot-loader';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

const App: React.SFC<{}> = () => (
  <Container>
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='fade' timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  </Container>
);

export default hot(module)(App);
