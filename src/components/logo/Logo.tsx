import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <Icon iconId="logo" width="60" height="45" viewBox="0 0 60 40" />
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  transition: 0.2s ease-in-out;
  &:hover {
    scale: 1.03;
  }
  svg {
    width: 50px;
    height: auto;
  }

  @media ${theme.media.tablet} {
    svg {
      width: 45px;
    }
  }
`;
