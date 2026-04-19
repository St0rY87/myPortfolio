import { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

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
    <StyledGoTopBtn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} $isShowBtn={isShowBtn}>
      <Icon iconId="arrowGoTop" width="30" height="30" viewBox="0 0 24 24" />
    </StyledGoTopBtn>
  );
};

const StyledGoTopBtn = styled.button<{ $isShowBtn: boolean }>`
  position: fixed;
  display: grid;
  place-items: center;
  z-index: 10;
  bottom: 30px;
  right: 30px;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  opacity: ${({ $isShowBtn }) => ($isShowBtn ? 1 : 0)};
  pointer-events: ${({ $isShowBtn }) => ($isShowBtn ? "auto" : "none")};
  transition: 0.3s ease-in-out;
  & svg {
    fill: #fff;
  }

  @media ${({ theme }) => theme.media.tablet} {
    bottom: 20px;
    right: 20px;
    width: 40px;
    border-radius: 10px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    bottom: 10px;
    right: 10px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.btnGoTopBg};
      transform: translateY(-8px);
    }
  }
`;
