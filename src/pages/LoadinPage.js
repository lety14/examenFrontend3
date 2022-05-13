import React from "react";
import "animate.css";
import styled from "styled-components";
import { keyframes } from "styled-components";
import nyanCatGif from "../img/nyan-cat.gif";

const Title = styled.h1`
  font-size: 25px;
  line-height: 50px;
  /* TABLET */
  @media screen and (min-width: 451px) and (max-width: 950px) {
    font-size: 30px;
    line-height: 50px;
  }
  /* DESKTOP */

  @media screen and (min-width: 951px) {
    font-size: 60px;
    line-height: 100px;
  }
`;
const Subtitle = styled.h3`
  font-size: 15px;
  line-height: 50px;
  /* TABLET */
  @media screen and (min-width: 451px) and (max-width: 950px) {
    font-size: 20px;
    line-height: 50px;
  }
  /* DESKTOP */
  @media screen and (min-width: 951px) {
    font-size: 30px;
    line-height: 100px;
  }
`;

const loading = keyframes`
 from {
      background-position-x: -700px;
    }
    to {
      background-position-x: 0px;
    }
`;
const ContainerLoading = styled.div`
  font-family: "Press Start 2P", cursive;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background-color: black;
  width: auto;
  text-align: center;
  padding: 20px 10px;
  height: 100vh;
`;

const GifImage = styled.div`
  background-color: black;
  background-image: url(${nyanCatGif});
  background-repeat: no-repeat;
  background-size: 300px;
  background-position-y: bottom;
  height: 130px;
  animation-duration: 4s;
  animation-name: ${loading};
  /* TABLET */
  @media screen and (min-width: 451px) and (max-width: 950px) {
    background-size: 400px;
    height: 180px;
  }
  /* DESKTOP */
  @media screen and (min-width: 951px) {
    background-size: 700px;
    height: 320px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FadeInEffect = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 1s;
`;

class LoadingPage extends React.Component {
  render() {
    return (
      <ContainerLoading>
        <FadeInEffect>
          <Title>ADVENTURE GAME</Title>
          <Subtitle>CHOOSE YOUR PATH</Subtitle>
        </FadeInEffect>
        <GifImage />
      </ContainerLoading>
    );
  }
}

export default LoadingPage;
