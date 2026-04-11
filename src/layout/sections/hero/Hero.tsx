import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TickerTape } from "../../../components/tickerTape/TickerTape";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import photo from "../../../assets/images/hero.png";
import { Parallax } from "../../../components/parallax/Parallax";
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
      <Parallax />
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
  cursor: pointer;
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
