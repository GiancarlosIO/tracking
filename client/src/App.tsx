import * as React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { hot } from 'react-hot-loader';
import * as ReactRouter from 'react-router-dom';

import Home from './Pages/Home';

injectGlobal`
  body {
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 16px;
    position: relative;
  }
`;

const Container = styled.div`
`;

const Login = () => {
  return (
    <h2>11</h2>
  );
}


const App: React.SFC<{}> = () => (
  <Container>
    <ReactRouter.BrowserRouter>
      <ReactRouter.Switch>
        <ReactRouter.Route exact path="/" component={Home} />
        <ReactRouter.Route exact path="/login" component={Login} />
      </ReactRouter.Switch>
    </ReactRouter.BrowserRouter>
  </Container>
);

export default hot(module)(App);
