import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/Menu";
import moon from "../../assets/images/moon.png";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

const menuItems = ["Home", "Skills", "Works", "Contacts"];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify='space-between'>
          <Logo />
          <FlexWrapper gap="50px" align="center">
            <Menu menuItems={menuItems} />
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
`;

const ThemeToggle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 40px;
  }
`;
