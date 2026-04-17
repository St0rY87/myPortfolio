import styled from "styled-components";

type LinkPropsType = {
  name: string;
  as: "a" | "button";
  url?: string;
  onClick?: () => void;
  isActiveOverlay?: boolean;
};

export const Link = (props: LinkPropsType) => {
  const { name, url, as = "a", onClick, isActiveOverlay = false } = props;
  return as === "button" ? (
    <StyledLink $isActive={isActiveOverlay} as="button" onClick={onClick}>
      {name}
    </StyledLink>
  ) : (
    <StyledLink $isActive={isActiveOverlay} as="a" href={url}>
      {name}
    </StyledLink>
  );
};

const StyledLink = styled.a<{ $isActive: boolean }>`
  padding-block: 10px;
  color: #fff;
  color: ${({theme}) => theme.colors.fourthFontColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    height: 7px;
    background-color: ${({theme}) => theme.colors.cardLinkLineColor};
    left: 50%;
    transform: translateX(-50%);
    bottom: 8px;
    transition: all 0.4s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover::before {
      height: 7px;
      width: 100%;
    }
  }

`;
