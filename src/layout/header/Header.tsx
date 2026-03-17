import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import moon from "../../assets/images/moon.png";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

const menuItems = ["Home", "Skills", "Works", "Contacts"];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify="space-between">
          <Logo />
          <FlexWrapper $align="center" $gap="60px">
            <HeaderMenu menuItems={menuItems} />
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
  padding-block: 20px;
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const ThemeToggle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 40px;
  }
`;
