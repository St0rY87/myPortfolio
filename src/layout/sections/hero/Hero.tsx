import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/Dima.png";
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

const Photo = styled.img`
  margin-top: auto;
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
  align-items: center;
  gap: 120px;
  /* background:  linear-gradient(180deg, rgba(79, 172, 254, 0.2) 0%, rgba(62, 115, 141, 0.2) 47.12%, rgba(29, 88, 140, 0.2) 98.08%);; */
  background: ${theme.colors.secondaryBg};
  box-shadow: ${theme.colors.mainBoxShadow};
  border-radius: 200px 10px;
  overflow:hidden;
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

const Link= styled.a`
  background-color: ${theme.colors.accentColor};
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  padding: 10px 25px;
  color: ${theme.colors.accentFontColor};
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  & + &, & + &:hover {
    background-color: unset;
  }

  &:hover {
    background-color:#3566ee;
  }
`;
