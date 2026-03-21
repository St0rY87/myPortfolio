import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import moon from "../../assets/images/moon.png";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const menuItems = ["Home", "Skills", "Works", "Contacts"];
const menuItems2 = ["Home", "Skills", "Works", "Contacts"];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify="space-between">
          <Logo />
          <FlexWrapper $align="center" $gap="60px">
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
  padding-block: 10px;
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  @media ${theme.media.mobile} {
    padding: 5px 8px;
  }
`;

const ThemeToggle = styled.button`
  padding: 10px;

  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 40px;
  }

  @media ${theme.media.tablet} {
    margin-right: 75px;
    img {
    width: 35px;
  }
  }
  @media ${theme.media.mobile} {
    margin-right: 55px;
    padding: 0;
  }
`;
