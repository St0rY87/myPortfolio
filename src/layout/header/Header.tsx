import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/menu";
import moon from "../../assets/images/moon.png";

const menuItems = ["Home", "Skills", "Works", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <FlexWrapper gap="50px" align="center">
        <Menu menuItems={menuItems} />
        <ThemeToggle>
          <img src={moon} />
        </ThemeToggle>
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: lightcoral;
  display: flex;
  justify-content: space-between;
`;

const ThemeToggle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 40px;
  }
`;
