import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import moon from "../../assets/images/moon.png";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const menuItems = ["Home", "Skills", "Projects", "Contacts"];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify="space-between">
          <Logo />
          <FlexWrapper $align="center" $gap="20px">
            <HeaderMenu menuItems={menuItems} />
            <MobileMenu menuItems={menuItems} />
            <ThemeToggle>
              <img src={moon} />
            </ThemeToggle>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${theme.colors.primaryBg};
  padding-top: 10px;
  position: fixed;
  opacity: 0.95;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  @media ${theme.media.tablet} {
    opacity: unset;
  }
`;

const ThemeToggle = styled.button`
  padding: 10px;

  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 30px;
  }

  @media ${theme.media.tablet} {
    margin-right: 75px;
    img {
      width: 35px;
    }
  }
  @media ${theme.media.mobile} {
    margin-right: 60px;
  }
`;
