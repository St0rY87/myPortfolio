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
  opacity: 0.8;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 1;
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
