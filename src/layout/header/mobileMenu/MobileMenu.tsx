import styled, { css } from "styled-components";
import { MobileMenuItem } from "./mobileMenuItem/MobileMenuItem";
import { theme } from "../../../styles/Theme";
import { useEffect, useState } from "react";
import { BurgerButton } from "../../../components/burgerButton/BurgerButton";

export const MobileMenu = (props: { menuItems: Array<string> }) => {

  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <StyledMobileMenu>
      <BurgerButton showMenu={showMenu} isOpen={isOpen} />
      <MobileMenuPopup $isOpen={isOpen}>
        <ListItems>
          {props.menuItems.map((item) => (
            <MobileMenuItem key={item} item={item} showMenu={showMenu}/>
          ))}
        </ListItems>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;
const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  /* background: ${theme.colors.primaryBg}; */
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  width: 100%;
  left: -100%;
  transition: 0.5s ease-in;

  &:before {
    transition: 0.5s ease-in 0.3s;
    content: "";
    width: 100%;
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
    opacity: 0;
  }

  ${(props) =>
    props.$isOpen &&
    css<{ $isOpen: boolean }>`
      transition: 0.5s ease-in 0.3s;
      left: 0;
      &:before {
        transition: 0.5s ease-in;
        opacity: 1;
      }
    `}
`;

const ListItems = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
