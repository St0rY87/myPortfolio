import styled, { css } from "styled-components";
import { MobileMenuItem } from "./mobileMenuItem/MobileMenuItem";
import { theme } from "../../../styles/Theme";
import { useEffect, useRef, useState } from "react";
import { BurgerButton } from "../../../components/burgerButton/BurgerButton";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  const menuRef = useRef<HTMLDivElement>(null);

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
      <MobileMenuPopup ref={menuRef} $isOpen={isOpen}>
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

// const BurgerButton = styled.button<{ $isOpen: boolean; onClick: () => void }>`
//   position: fixed;
//   top: 10px;
//   right: 0;
//   width: 75px;
//   height: 65px;
//   z-index: 9999;

//   span {
//     display: block;
//     height: 2px;
//     width: 36px;
//     background-color: ${theme.colors.thirdBg};
//     position: absolute;
//     left: 20px;

//     ${(props) =>
//       props.$isOpen &&
//       css<{ $isOpen: boolean }>`
//         background-color: rgba(255, 255, 255, 0);
//       `}

//     &::before {
//       content: "";
//       display: block;
//       height: 2px;
//       width: 36px;
//       background-color: ${theme.colors.thirdBg};
//       position: absolute;
//       transform: translateY(-10px);
//       ${(props) =>
//         props.$isOpen &&
//         css<{ $isOpen: boolean }>`
//           transform: rotate(-45deg) translateY(0px);
//         `}
//     }
//     &::after {
//       content: "";
//       display: block;
//       height: 2px;
//       width: 36px;
//       background-color: ${theme.colors.thirdBg};
//       position: absolute;
//       transform: translateY(10px);
//       ${(props) =>
//         props.$isOpen &&
//         css<{ $isOpen: boolean }>`
//           transform: rotate(45deg) translateY(0px);
//           width: 36px;
//         `}
//     }
//   }
// `;

// const BurgerButton = styled.button<{ onClick: () => void }>`
//   position: fixed;
//   top: 10px;
//   right: 0;
//   width: 75px;
//   height: 65px;
//   z-index: 9999;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .hamburger {
//      /* outline: 1px solid red; */
//     fill: ${theme.colors.thirdBg};
//     width: 40px;
//     height: 40px;
//   }

//   .line {
//     transition: y 300ms ease-in 300ms,
//                 rotate 300ms ease-in,
//                 opacity 0ms 300ms;
//     transform-origin: center;
//   }

//   &[aria-expanded="true"] .line {
//     transition: y 300ms ease-in,
//                 rotate 300ms ease-in 300ms,
//                 opacity 0ms 300ms;
//   }

//   &[aria-expanded="true"] .top,
//   &[aria-expanded="true"] .bottom {
//     y: 45;
//   }

//   &[aria-expanded="true"] .top {
//     rotate: 45deg;
//   }

//   &[aria-expanded="true"] .middle {
//     opacity: 0;
//   }

//   &[aria-expanded="true"] .bottom {
//     rotate: -45deg;
//   }
// `;
