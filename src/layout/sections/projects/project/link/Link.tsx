import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";

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
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: relative;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: ${(props) => (props.$isActive ? "7px" : "0")};
    background-color: ${theme.colors.accentColor};
    left: 0;
    bottom: 8px;
    z-index: -1;
  }

  &:hover {
    &:before {
      height: 7px;
    }
  }
`;
