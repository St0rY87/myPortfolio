import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";

export const Footer = () => {
  return (
    <StyledFooter>
      <Wave>
        <svg viewBox="0 0 240 28" preserveAspectRatio="none">
          <path
            id="wave"
            d="M0 0C30 0 30 8 60 8C90 8 90 0 120 0C150 0 150.5 8 180.5 8C210.5 8 210 0 240 0V28H0V0Z"
          />
          <path
            id="wave2"
            d="M0 0C30 0 30 8 60 8C90 8 90 0 120 0C150 0 150.5 8 180.5 8C210.5 8 210 0 240 0V28H0V0Z"
          />
        </svg>
      </Wave>
      <WrapperContent>
        <Logo />
        <Copyright>All Rights Reserved 2026©</Copyright>
      </WrapperContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: rgb(4 20 66 / 79%);
  background: #000339;
  background: ${({ theme }) => theme.colors.thirdBg};
  background: #fff;

  position: relative;
  overflow: hidden;
  height: 200px;
  /* border: 1px solid red; */
  @media ${({ theme }) => theme.media.laptop} {
    height: 150px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    height: 120px;
  }
`;
const WrapperContent = styled.div`
  position: absolute;
  left: 50%;
  bottom: 25%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 15%;
  }
`;

const Copyright = styled.small`
  font-size: 12px;
  color: #fff;
`;
const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 0;

  svg {
    width: clamp(
      218.75rem,
      147.3214rem + 111.6071vw,
      281.25rem
    ); /* 4500-3500 to 1024px*/
    height: inherit;
    display: block;
  }

  svg path {
    fill: #355ecf;
    fill: #051850;  
    fill: ${({ theme }) => theme.colors.waveColor};
    animation: wave 3s linear infinite;
  }

  svg #wave {
    animation-duration: 8s;
    animation-direction: reverse;
    opacity: ${({ theme }) => theme.colors.wave1opacity};
  }

  svg #wave2 {
    animation-duration: 10s;
    opacity: ${({ theme }) => theme.colors.wave2opacity};
  }

  @keyframes wave {
    to {
      transform: translateX(-50%);
    }
  }

  @media ${({ theme }) => theme.media.large} {
    svg {
      width: 200%;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    svg {
      width: 1900px;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    /* svg {
      width: 2500px;
    } */
  }
`;
