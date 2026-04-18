import styled from "styled-components";

type BurgerButtonPropsType = {
  showMenu: () => void;
  isOpen: boolean;
};

export const BurgerButton = ({ showMenu, isOpen }: BurgerButtonPropsType) => {
  return (
    <StyledBurgerButton
      onClick={showMenu}
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <svg viewBox="0 0 90 95">
        <rect className="line top" width="80" height="5" x="5" y="25" />
        <rect className="line middle" width="80" height="5" x="5" y="45" />
        <rect className="line bottom" width="80" height="5" x="5" y="65" />
      </svg>
    </StyledBurgerButton>
  );
};

const StyledBurgerButton = styled.button`
  position: fixed;
  top: 10px;
  right: 20px;
  width: 75px;
  height: 60px;
  z-index: 9999;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    fill: ${({ theme }) => theme.colors.colorBurgerButton};
    width: 40px;
    height: 40px;
  }

  .line {
    transition:
      y 300ms ease-in 300ms,
      rotate 300ms ease-in,
      opacity 0ms 300ms;
    transform-origin: center;
  }

  &[aria-expanded="true"] .line {
    transition:
      y 300ms ease-in,
      rotate 300ms ease-in 300ms,
      opacity 0ms 300ms;
  }

  &[aria-expanded="true"] .top,
  &[aria-expanded="true"] .bottom {
    y: 45;
  }

  &[aria-expanded="true"] .top {
    rotate: 45deg;
  }

  &[aria-expanded="true"] .middle {
    opacity: 0;
  }

  &[aria-expanded="true"] .bottom {
    rotate: -45deg;
  }

   @media ${({ theme }) => theme.media.tablet} {
    top: 0;
    right: 10px;
  }

`;