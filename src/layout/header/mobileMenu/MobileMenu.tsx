import styled, { css } from "styled-components";
import { MobileMenuItem } from "./mobileMenuItem/MobileMenuItem";
import { theme } from "../../../styles/Theme";
import { useEffect, useRef, useState } from "react";
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
      <BurgerButton onClick={showMenu} isOpen={isOpen} />
      <MobileMenuPopup $isOpen={isOpen}>
        <ListItems>
          {props.menuItems.map((item) => (
            <MobileMenuItem key={item} item={item} />
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
  background-color: rgba(0, 0, 0, 0.98);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  width: 100%;
  left: -100%;
  transition: 0.5s ease-in 0s;

  &:before {
    /* transition: 0.7s ease-in 0.3s; */
    transition: 0.5s ease-in 0.3s;
    content: "";
    width: 120vw;
    position: fixed;
    top: 0;
    bottom: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.792);
    z-index: -1;
    left: -120vw;
  }

  ${(props) =>
    props.$isOpen &&
    css<{ $isOpen: boolean }>`
      transition: 0.5s ease-in 0.3s;
      left: 0;
      &:before {
        transition: 0.5s ease-in;
        left: 0;
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
