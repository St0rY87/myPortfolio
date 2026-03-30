import { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn = () => {
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShowBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledGoTopBtn onClick={() => scroll.scrollToTop()} $isShowBtn={isShowBtn}>
      <Icon iconId="arrowGoTop" width="30" height="30" viewBox="0 0 24 24" />
    </StyledGoTopBtn>
  );
};

const StyledGoTopBtn = styled.button<{ $isShowBtn: boolean }>`
  position: fixed;
  z-index: 100;
  bottom: 30px;
  right: 30px;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 15px;
  background-color: ${theme.colors.accentColor};
  opacity: ${(props) => [props.$isShowBtn ? 1 : 0]};
  pointer-events: ${(props) => [props.$isShowBtn ? "auto" : "none"]};
  transition: 0.4s ease-in-out;
  svg {
    fill: #fff;
  }

  @media ${theme.media.tablet} {
    bottom: 20px;
    right: 20px;
    width: 40px;
    border-radius: 10px;
  }

  @media ${theme.media.mobile} {
    bottom: 10px;
    right: 10px;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;
