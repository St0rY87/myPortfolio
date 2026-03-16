import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
   *,
   *::after,
   *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   html {
    box-sizing: border-box;
    scroll-behavior: smooth
   }

   body {
    font-family: "Roboto", sans-serif;
    color: ${theme.colors.accentFontColor}
   }

  a {
    text-decoration: none;
    color: ${theme.colors.accentFontColor}
  }

  ul {
    list-style-type: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section {
    background: ${theme.colors.primaryBg};
  }


 `;
