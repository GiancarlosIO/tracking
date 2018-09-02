import * as React from 'react';
import styled from 'react-emotion';

const SunRays = styled.div`
  @keyframes rays {
    0% {
        transform: scale(1.1);
    }
    25% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1.1);
    }
    75% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1.1);
    }
  }
  position: fixed;
  top: -75px;
  left: -120px;
  height: 400px;
  width: 400px;
  z-index: -1;
  background: radial-gradient(rgba(255, 237, 175, .8) 50%, rgba(255, 237, 175, .2) 70%);
  border-radius: 50%;
  box-shadow: 0 0 .5em rgba(255, 237, 175, 1);
  animation: rays 10s infinite;
`;

const SunInner = styled.div`
  position: absolute;
  bottom: 34.5em;
  right: 20.5em;
  height: 10em;
  width: 10em;
  z-index: -5;
  background: rgba(255, 237, 175, 1);
  border-radius: 50%;
  box-shadow: 0 0 1em rgba(255, 237, 175, .5), inset 0 0 .5em #FFFFAD;
`

const Sun : React.SFC<{}> = () => (
  <SunRays>
    <SunInner />
  </SunRays>
);

export default Sun;