import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  background-color: ${theme.colors.accentColor};
  font-weight: 500;
  font-size: 14px;
  padding: 10px 25px;
  color: ${theme.colors.accentFontColor};
  border-radius: 10px;
  width: max-content;
  cursor: pointer;
  letter-spacing: 1.75px;
  position: relative;
  z-index: 0;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #3566ee;
  }
`;
