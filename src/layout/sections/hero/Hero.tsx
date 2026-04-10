import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TickerTape } from "../../../components/tickerTape/TickerTape";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import photo from "../../../assets/images/hero.png";
import React from "react";

const tickerTape = [
  "PROBLEM SOLVING",
  "CREATIVE THINKING",
  "DEEP EXPERTISE",
  "TEAM WORKER",
  "POSITIVE ATTITUDE",
  "PROBLEM SOLVING",
  "ATTENTION TO DETAIL",
  "ADAPTABILITY",
  "RESILIENCE",
  "ANIMATIONS",
  "PROBLEM SOLVING",
  "CREATIVE THINKING",
  "DEEP EXPERTISE",
  "ATTENTION TO DETAIL",
  "ADAPTABILITY",
  "RESILIENCE",
  "ANIMATIONS",
];

export const Hero = () => {
  return (
    <StyledHero id="home">
      <Container>
        <HeroWrapper>
          <PhotoWrapper>
            <Photo src={photo} alt="Dmitriy Savin, frontend developer" />
          </PhotoWrapper>
          <FlexWrapper
            $width="min(100%, 550px)"
            $direction="column"
            $gap="20px"
            $gapMobile="10px"
          >
            <Greeting>
              <span>Hello, my name’s</span>{" "}
              <Name>
                <p>Dmitriy Savin</p>
                <Typewriter
                  options={{
                    strings: ["Dmitriy Savin"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Name>
            </Greeting>
            <Description>
              I’m a <strong>frontend developer</strong> specializing in{" "}
              <strong>React and TypeScript</strong>, focused on building fast,
              scalable and user-friendly web applications.
            </Description>
            <FlexWrapper
              $gap="20px"
              $gapMobile="10px"
              $margin="50px 0 0"
              $marginTablet="20px 0 0"
            >
              <HeroLink to="projects" smooth={true} offset={-76}>
                See Projects
              </HeroLink>
              <HeroLink to="#">Download CV</HeroLink>
            </FlexWrapper>
          </FlexWrapper>
        </HeroWrapper>
      </Container>

      <GridParallax>
        <ItemZMinus1>
          <ItemXYOutline />
        </ItemZMinus1>
        <ItemZMinus2>
          <ItemXY>
            <ItemIconWrapper>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                    fill="currentcolor"
                  ></path>
                </g>
              </svg>
            </ItemIconWrapper>
          </ItemXY>
        </ItemZMinus2>
        {/* <ItemZPlus1>
          <ItemXY>
            <ItemIconWrapper>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                    fill="currentcolor"
                  ></path>
                </g>
              </svg>
            </ItemIconWrapper>
          </ItemXY>
        </ItemZPlus1>  */}
        <ItemZMinus1>
          <ItemXYOutline />
        </ItemZMinus1>
        <ItemZMinus2>
          <ItemXY />
        </ItemZMinus2>
        <ItemZPlus1>
          <ItemXY>
            <ItemIconWrapper>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                    fill="currentcolor"
                  ></path>
                </g>
              </svg>
            </ItemIconWrapper>
          </ItemXY>
        </ItemZPlus1>
        <ItemZMinus1>
          {/* <ItemXY>
            <ItemIconWrapper>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                    fill="currentcolor"
                  ></path>
                </g>
              </svg>
            </ItemIconWrapper>
          </ItemXY> */}
        </ItemZMinus1>
        <ItemZ>
          <ItemXY />
        </ItemZ>
        <ItemZPlus1>
          <ItemXY>
            <ItemIconWrapper>
              <svg viewBox="0 0 128 128">
                <path
                  d="M125.54 26.23a28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.81 21.81 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.47 78.47 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.47 78.47 0 00.79-7.83V34.06a39.32 39.32 0 00-.8-7.83zm-18.79 75.54C101 91 90.37 94.33 85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.71 32.71 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.6 12.63 7.67 26.02 6.35 23.49z"
                  fill="currentcolor"
                ></path>
              </svg>
            </ItemIconWrapper>
          </ItemXY>
        </ItemZPlus1>
        <ItemZ>
          <ItemXY />
        </ItemZ>
        <ItemZMinus1>
          <ItemXY>
            <ItemIconWrapper>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                    fill="currentcolor"
                  ></path>
                </g>
              </svg>
            </ItemIconWrapper>
          </ItemXY>
        </ItemZMinus1>
        <ItemZPlus1>{/* <ItemXYOutline /> */}</ItemZPlus1>
        <ItemZPlus2>{/* <ItemXY /> */}</ItemZPlus2>
        <ItemZMinus2>
          <ItemXY></ItemXY>
        </ItemZMinus2>
        <ItemZPlus2>{/* <ItemXY /> */}</ItemZPlus2>
        <ItemZPlus2>
          <ItemXYOutline />
        </ItemZPlus2>
        <ItemZPlus2>
          {/* <ItemXY>
            <ItemIconWrapper>
              <svg
                viewBox="0 0 24 24"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                    fill="currentcolor"
                  ></path>
                </g>
              </svg>
            </ItemIconWrapper>
          </ItemXY> */}
        </ItemZPlus2>
        <ItemZPlus1>{/* <ItemXY></ItemXY> */}</ItemZPlus1>
        <ItemZPlus2>
          <ItemXY />
        </ItemZPlus2>

        <ItemZMinus1>
          <ItemXYOutline />
        </ItemZMinus1>
        <ItemZ>{/* <ItemXY /> */}</ItemZ>
        <ItemZ>
          <ItemXY />
        </ItemZ>
        <ItemZPlus1>
          <ItemXY>
            <ItemIconWrapper>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                    fill="currentcolor"
                  ></path>
                </g>
              </svg>
            </ItemIconWrapper>
          </ItemXY>
        </ItemZPlus1>
        <ItemZ>
          <ItemXYOutline />
        </ItemZ>
        <ItemZ>
          <ItemXY />
        </ItemZ>
      </GridParallax>
      <TickerTape listItems={tickerTape} />
    </StyledHero>
  );
};

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${Container} {
    margin-block: auto;
    z-index: 2;
  }

  position: relative;

  @media ${theme.media.tablet} {
    padding-top: 75px;
  }
  @media ${theme.media.mobile} {
    padding-top: 65px;
    min-height: 100dvh;
  }
  @media (max-width: 750px) and (orientation: landscape),
    (orientation: portrait) {
    min-height: 100dvh;
  }
`;

const GridParallax = styled.div`
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  perspective: 350px;
  perspective-origin: 50%;
  grid-template-rows: auto;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  grid-auto-columns: auto;
  place-items: center;
  display: grid;
  position: absolute;
  inset: 0;
  overflow: hidden;
  transform: none;
  /* background-color: #c81ed161; */
  z-index: 1;
  pointer-events: none;
`;

const ItemZ = styled.div``;
const ItemZPlus1 = styled.div`
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 3rem);
`;
const ItemZPlus2 = styled.div`
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 6rem);
`;
const ItemZMinus1 = styled.div`
  transform-style: preserve-3d;
  transform: translate3d(0, 0, -3rem);
`;
const ItemZMinus2 = styled.div`
  transform-style: preserve-3d;
  transform: translate3d(0, 0, -6rem);
`;
const ItemXY = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  display: flex;
`;

const ItemXYOutline = styled.div`
  border: 1px solid rgba(255 255 255 / 0.1);
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  display: flex;
`;

const ItemIconWrapper = styled.div`
  color: #fff9;
  flex: none;
  justify-content: center;
  align-items: stretch;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
`;

const PhotoWrapper = styled.div`
  margin-top: auto;

  @media ${theme.media.tablet} {
    overflow: hidden;
    border-radius: 50%;
    width: 260px;
    aspect-ratio: 1;
    border: 8px solid rgba(255, 255, 255, 0.6);
    filter: drop-shadow(0 0 51px #fff);
  }

  @media ${theme.media.mobile} {
    width: 220px;
    border-width: 5px;
  }
`;

const Photo = styled.img`
  display: flex;
  width: 285px;
  animation: pulseGlow 6s ease-in-out infinite;

  @keyframes pulseGlow {
    0% {
      filter: drop-shadow(0 0 51px #fff) drop-shadow(0 0 100px #fff);
    }
    50% {
      filter: drop-shadow(0 0 100px #fff) drop-shadow(0 0 150px #2157f2);
    }
    100% {
      filter: drop-shadow(0 0 51px #fff) drop-shadow(0 0 100px #fff);
    }
  }

  /* @media ${theme.media.tablet} {
    border-radius: 50%;
    width: 280px;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: 0 -15%;
    border: 8px solid rgba(255, 255, 255, 0.6);
  }
  

  @media ${theme.media.mobile} {
    width: 220px;
    border-width: 5px;
  } */

  @media ${theme.media.tablet} {
    width: 100%;
    margin-top: 20px;
    /* object-fit: cover;
    object-position: 0 -15%; */
  }

  @media (max-height: 750px) and (orientation: landscape) {
    width: 250px;
  }
`;

const HeroWrapper = styled.div`
  margin-inline: auto;
  width: min(100%, 1150px);
  min-height: 490px;
  padding-inline: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  background: ${theme.colors.secondaryBg};
  border: 1px solid #ffffff70;
  border-radius: 200px 10px;
  overflow: hidden;
  cursor: pointer;

  @media ${theme.media.tablet} {
    width: min(100%, 550px);
    padding: 30px;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
  }
  @media ${theme.media.mobile} {
    padding: 30px 20px;
    border-radius: 110px 10px;
  }

  @media (max-height: 750px) and (orientation: landscape) {
    min-height: 410px;
    margin-top: 60px;
    width: min(100%, 1000px);
  }
`;

const Greeting = styled.div`
  font-weight: 700;
  font-size: 58px;
  font-size: ${theme.fonts.heroTitle};
  line-height: 1.3;

  @media ${theme.media.mobile} {
    line-height: 1.2;
  }
`;

const Name = styled.h1`
  color: #2157f2;
  font-size: 58px;
  font-size: inherit;
  p {
    display: none;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  font-size: ${theme.fonts.heroDesc};
  strong {
    font-weight: inherit;
  }

  @media ${theme.media.mobile} {
    line-height: 1.3;
  }
`;

const HeroLink = styled(Link)`
  background-color: ${theme.colors.accentColor};
  font-weight: 600;
  font-size: ${theme.fonts.heroDesc};
  line-height: 150%;
  padding: 10px 25px;
  color: ${theme.colors.accentFontColor};
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  & + &,
  & + &:hover {
    background-color: unset;
    transform: unset;
  }

  & + & {
    position: relative;
    overflow: hidden;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: ${theme.colors.accentColor};
      border-radius: 100%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: -1;
      opacity: 0;
    }
    &:hover {
      transition: transform 0.3s ease-in-out 0.7s;

      transform: translateY(-5px);
    }

    &:hover::before {
      width: 200px;
      height: 200px;
      animation: ripple78 1s ease-out;
      opacity: 1;
    }

    @keyframes ripple78 {
      0% {
        width: 0;
        height: 0;
        opacity: 0.5;
      }
      70% {
        width: 200px;
        height: 200px;
        opacity: 0.2;
      }
      100% {
        width: 200px;
        height: 200px;
        opacity: 1;
      }
    }
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media ${theme.media.tablet} {
    font-weight: 400;
    line-height: 141%;
    padding: 7px 12px;
    border-radius: 5px;
  }
`;
