import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

import CloudWrap from './components/CloudWrap';
import Sun from './components/Sun';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: Gradient 5s ease infinite;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
`;

const Logo = styled.div`
  background-color: rgba(61, 61, 61, .5);
  padding: 8px 50px 24px 50px;
  border-radius: 30px;
  position: relative;

  & > span {
    font-family: 'Alegreya Sans', sans-serif;
  }
  & > h1 {
    margin-bottom: 0px;
    font-weight: bold;
  }
`;

const LinkContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const StyledLink = styled(Link)`
  padding: 8px 16px;
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 5px;
  color: white;
  transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    background-color: #7d5fff;
    border: 2px solid #7d5fff;
  }
`;

const Home = () => (
  <Container>
    <Sun />
    <CloudWrap />
    <Logo className='txt-white txt-center'>
      <h1 className='txt-36'>
        Tracking
        {' '}
      </h1>
      <span className='txt-12'>coming soon...🚀</span>
    </Logo>
    <LinkContainer className='txt-white'>
      <StyledLink to='/login'>
        Ingresar
      </StyledLink>
    </LinkContainer>
  </Container>
);

export default Home;
