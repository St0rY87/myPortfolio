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
    scroll-behavior: smooth
   }

   body {
    font-family: 'Roboto', sans-serif;
   }
 `;
