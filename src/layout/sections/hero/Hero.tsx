import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TickerTape } from "../../../components/tickerTape/TickerTape";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import photo from "../../../assets/images/hero.png";

// import arrowRaw from "../../../assets/images/arrow-left.svg?raw";

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
            <Photo src={photo} alt="Dmitriy Savin, frontend developer" />
          </PhotoWrapper>
          <FlexWrapper
            $width="min(100%, 550px)"
            $direction="column"
            $gap="20px"
            $gapMobile="10px"
          >
            <Greeting>
              <span>Hello, my name’s</span> <Name>Dmitriy Savin</Name>
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

  @media ${theme.media.tablet} {
    padding-top: 75px;
  }
  @media ${theme.media.mobile} {
    padding-top: 65px;
  }
`;

/* &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 48px;
    height: 71px;
  }
  &:before {
    left: -75px;
    top: 50%;
    transform: translateY(-50%);
    background: url("data:image/svg+xml;utf8,${encodeURIComponent(arrowRaw)}");
  }
  &:after {
    right: -75px;
    top: 50%;
    rotate: 180deg;
    transform: translateY(50%);
    background: url("data:image/svg+xml;utf8,${encodeURIComponent(arrowRaw)}");
  } */
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   gap: 20px;
//   margin: 50px 0 0;
//   @media ${theme.media.tablet} {
//     margin: 20px 0 0;
//   }
//   @media ${theme.media.mobile} {
//     gap: 10px;
//   }
// `;

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
  filter: drop-shadow(0 0 51px #fff) drop-shadow(0 0 100px #fff);

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
  /* box-shadow: ${theme.colors.mainBoxShadow}; */
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

const Link = styled.a`
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
  }

  &:hover {
    background-color: #3566ee;
  }

  @media ${theme.media.tablet} {
    font-weight: 400;
    line-height: 141%;
    padding: 7px 12px;
    border-radius: 5px;
  }
`;
