import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TickerTape } from "../../../components/tickerTape/TickerTape";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

import photo from "../../../assets/images/Dima.png";
import arrow from "../../../assets/images/arrow-left.svg";

const tickerTape = [
  "PROBLEM SOLVING",
  "&&",
  "CREATIVE THINKING",
  "&&",
  "DEEP EXPERTISE",
  "&&",
  "TEAM WORKER",
  "&&",
  "POSITIVE ATTITUDE",
  "&&",
  "PROBLEM SOLVING",
  "&&",
  "ATTENTION TO DETAIL",
  "&&",
  "ADAPTABILITY",
  "&&",
  "RESILIENCE",
  "&&",
  "ANIMATIONS",
];

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <HeroWrapper>
          <PhotoWrapper>
            <Photo src={photo} />
            <BracketLeft src={arrow} alt="bracket" />
            <BracketRight src={arrow} alt="bracket" />
          </PhotoWrapper>
          <FlexWrapper width="min(100%, 450px)" direction="column" gap="20px">
            <Greeting>
              <span>Hello, my name’s</span> <Name>Dmitriy Savin</Name>
            </Greeting>
            <Description>
              I’m a <span>frontend developer</span> specializing in React and
              TypeScript, focused on building fast, scalable and user-friendly
              web applications.
            </Description>
            <FlexWrapper gap="30px" margin="50px 0 0">
              <Link href="#">See Projects </Link>
              <Link href="#">Download CV</Link>
            </FlexWrapper>
          </FlexWrapper>
        </HeroWrapper>
      </Container>
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
  }
`;

const PhotoWrapper = styled.div`
  margin-top: auto;
  position: relative;
`;
const BracketLeft = styled.img`
  position: absolute;
  left: -30%;
  top: 50%;
  transform: translateY(-50%);
`;
const BracketRight = styled.img`
  position: absolute;
  right: -30%;
  top: 50%;
  rotate: 180deg;
  transform: translateY(50%);
`;

const Photo = styled.img`
  width: 275px;
  object-fit: cover;
  filter: drop-shadow(0 0 51px #fff) drop-shadow(0 0 100px #fff);
`;

const HeroWrapper = styled.div`
  margin-inline: auto;
  width: min(100%, 1150px);
  min-height: 490px;
  padding-inline: 20px;
  display: flex;
  justify-content: center;
  gap: 150px;
  align-items: center;
  background: ${theme.colors.secondaryBg};
  box-shadow: ${theme.colors.mainBoxShadow};
  border-radius: 200px 10px;
  overflow: hidden;
`;

const Greeting = styled.div`
  font-weight: 700;
  font-size: 58px;
  line-height: 136%;
`;

const Name = styled.h1`
  color: #2157f2;
  font-size: 58px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
`;

const Link = styled.a`
  background-color: ${theme.colors.accentColor};
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  padding: 10px 25px;
  color: ${theme.colors.accentFontColor};
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  & + &,
  & + &:hover {
    background-color: unset;
  }

  &:hover {
    background-color: #3566ee;
  }
`;
