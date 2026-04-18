import styled, { css } from "styled-components";
import { MobileMenuItem } from "./mobileMenuItem/MobileMenuItem";
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
      <Overlay $isOpen={isOpen} />
      <BurgerButton showMenu={showMenu} isOpen={isOpen} />
      <MobileMenuPopup $isOpen={isOpen}>
        <ListItems>
          {props.menuItems.map((item) => (
            <MobileMenuItem key={item} item={item} showMenu={showMenu} />
          ))}
        </ListItems>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${({ theme }) => theme.media.tablet} {
    display: block;
  }
`;
const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  background: linear-gradient(
    78deg,
    rgb(37 143 234) 0%,
    rgb(58 88 208) 47.12%,
    rgb(2 88 165) 98.08%
  );

  /* background: linear-gradient(
    78deg,
    linear-gradient(
      78deg,
      rgb(14, 7, 143) 0%,
      rgb(9, 34, 136) 47.12%,
      rgb(14, 7, 143) 98.08%
    )
  ); */
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  width: 100%;
  left: -100%;
  transition: 0.5s ease-in;

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

const Overlay = styled.div<{ $isOpen: boolean }>`
  transition: 0.5s ease-in 0.3s;
  content: "";
  width: 100%;
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
  opacity: 0;

  ${(props) =>
    props.$isOpen &&
    css`
      opacity: 1;
      transition: 0.5s ease-in;
    `}
`;

const ListItems = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
