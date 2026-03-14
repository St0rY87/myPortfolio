import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/hero.png";
import { TickerTape } from "../../../components/tickerTape/TickerTape";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

const tickerTape = [
  "PROBLEM SOLVING",
  "&&",
  "CEATIVE THINKIG",
  "&&",
  "DEEP EXPERTISE",
  "&&",
  "TEAM WORKER",
  "&&",
  "positive attitude",
  "&&",
  "PROBLEM SOLVING",
  "&&",
];

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <HeroWrapper>
          <Photo src={photo} />
          <FlexWrapper width="min(100%, 450px)" direction="column" gap='20px'>
            <Greeting>
              <span>Hello, my name’s</span> <Name>Dmitriy Savin</Name>
            </Greeting>
            <Description>
              I’m a <span>frontend developer</span> specializing in React and
              TypeScript, focused on building fast, scalable and user-friendly
              web applications.
            </Description>
            <FlexWrapper gap="15px">
              <a href="#">See Projects </a>
              <a href="#">Download CV</a>
            </FlexWrapper>
          </FlexWrapper>
        </HeroWrapper>
      </Container>
      <TickerTape listItems={tickerTape} />
    </StyledHero>
  );
};

const StyledHero = styled.section`
  min-height: 50vh;
  background-color: lightskyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  gap: 70px;
`;

const Photo = styled.img`
  width: 320px;
  height: 490px;
  object-fit: cover;
`;

const HeroWrapper = styled.div`
  width: min(100%, 1150px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 145px;
  /* background:  linear-gradient(0deg, rgba(79, 172, 254, 0.2) 0%, rgba(62, 115, 141, 0.2) 47.12%, rgba(29, 88, 140, 0.2) 98.08%);; */
  background: ${theme.colors.secondaryBg};
  box-shadow: 0 0 21px 0 #fdfdfd;
  box-shadow: ${theme.colors.mainBoxShadow};
  border-radius: 200px 10px;
`;

const Greeting = styled.div``;

const Name = styled.h1``;

const Description = styled.p``;
