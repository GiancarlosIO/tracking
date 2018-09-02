import * as React from 'react';
import styled from 'react-emotion';

const BackgroundWrap = styled.div`
  bottom: 0;
  left: 0;
  padding-top: 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  @-webkit-keyframes animateCloud {
    0% {
      margin-left: -1000px;
    }
    100% {
      margin-left: 100%;
    }
  }

  @-moz-keyframes animateCloud {
    0% {
      margin-left: -1000px;
    }
    100% {
      margin-left: 100%;
    }
  }

  @keyframes animateCloud {
    0% {
      margin-left: -1000px;
    }
    100% {
      margin-left: 100%;
    }
  }

  /* ANIMATIONS */

  & > .x1 {
    animation: animateCloud 35s linear infinite;
    transform: scale(0.65);
  }

  & > .x2 {
    animation: animateCloud 20s linear infinite;
    transform: scale(0.3);
  }

  & > .x3 {
    animation: animateCloud 30s linear infinite;
    transform: scale(0.5);
  }

  & > .x4 {
    animation: animateCloud 18s linear infinite;
    transform: scale(0.4);
  }

  & > .x5 {
    animation: animateCloud 25s linear infinite;;
    transform: scale(0.55);
  }

  & > .x6 {
    animation: animateCloud 40s linear infinite;
    transform: scale(0.7);
  }
`;

const Cloud = styled.div`
    background: #fff;
    background: -moz-linear-gradient(top,  #fff 5%, #f1f1f1 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#fff), color-stop(100%,#f1f1f1));
    background: -webkit-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
    background: -o-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
    background: -ms-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
    background: linear-gradient(top,  #fff 5%,#f1f1f1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );

    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;

    -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

    height: 120px;
    position: relative;
    width: 350px;

  &:after, &:before {
    background: #fff;
    content: '';
    position: absolute;
    z-indeX: -1;
  }

  &:after {
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;

    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }

  &:before {
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
    border-radius: 200px;

    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }
`;

const CloudWrap : React.SFC<{}> = () => (
  <BackgroundWrap>
    <div className="x1">
      <Cloud />
    </div>

    <div className="x2">
      <Cloud />
    </div>

    <div className="x3">
      <Cloud />
    </div>

    <div className="x4">
      <Cloud />
    </div>

    <div className="x5">
      <Cloud />
    </div>

    <div className="x6">
      <Cloud />
    </div>
  </BackgroundWrap>
)

export default CloudWrap;
