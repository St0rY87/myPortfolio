import { createGlobalStyle } from "styled-components";

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
    /* scroll-behavior: smooth; */
   }

   body {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.accentFontColor}  
   }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accentFontColor}  
  }

  ul {
    list-style-type: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  section {
    background: ${({ theme }) => theme.colors.primaryBg }
  };  

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
