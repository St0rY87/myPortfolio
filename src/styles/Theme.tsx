// export const theme = {
//     colors: {
//         primaryBg: 'linear-gradient(90deg, #a6bcfc 1.92%, #7293ef 96.15%);',

//         secondaryBg: 'linear-gradient(180deg, rgba(79, 172, 254, 0.2) 0%, rgba(62, 115, 141, 0.2) 47.12%, rgba(29, 88, 140, 0.2) 98.08%);',
//         thirdBg: '#fff',

//         darkTheme: 'background: linear-gradient(90deg, #1c3373 10.58%, #051850 84.62%);',

//         accentColor: '#2157F2',
//         secondColor: '#6190E8',

//         accentFontColor: '#fff',
//         secondFontColor: '#000',
//         thirdFontColor: '#D2D2D2',

//         mainBoxShadow: '0 0 21px 0 #fdfdfd'

//     },
//      media: {
//         large: 'screen and (min-width:1980px)',
//         desktopLaptop: 'screen and (min-width: 769px)',
//         laptop: 'screen and (max-width: 1024px)',
//         tablet: 'screen and (max-width: 768px)',
//         mobile: 'screen and (max-width: 576px)',

//     },

//     fonts: {
//         heroTitle: 'clamp(34px, 24.069px + 2.7586vw, 58px)',
//         heroDesc: 'clamp(18px, 17.1724px + 0.2299vw, 20px)',
//         tickerTape: 'clamp(18px, 14.6897px + 0.9195vw, 26px)',
//         mainTitle: 'clamp(30px, 21.7241px + 2.2989vw, 50px)',
//         contactsTitle: 'clamp(26px, 17.7241px + 2.2989vw, 46px)',
//     }

// }

// src/styles/theme.ts

import "styled-components";

export const lightTheme = {
  colors: {
    primaryBg: "linear-gradient(90deg, #a6bcfc 1.92%, #7293ef 96.15%);",
    secondaryBg:
      "linear-gradient(180deg, rgba(79, 172, 254, 0.2) 0%, rgba(62, 115, 141, 0.2) 47.12%, rgba(29, 88, 140, 0.2) 98.08%);",
    thirdBg: "#fcfcfc",

    accentColor: "#2157F2",
    secondColor: "#6190E8",

    accentFontColor: "#fff",
    secondFontColor: "#000",
    thirdFontColor: "#D2D2D2",
    fourthFontColor: "#fff",

    mainBoxShadow: "0 0 21px 0 #fdfdfd",

    tickerTapeColor: "#2157F2",

    cardBg: ' #000',
    cardLinkLineColor: '#2157F2',
    cardOverlay: 'rgb(0 0 0 / 90%)',
    btnOverlayHover: '#3566ee',
  },
  media: {
    large: "screen and (min-width:1980px)",
    desktopLaptop: "screen and (min-width: 769px)",
    laptop: "screen and (max-width: 1024px)",
    tablet: "screen and (max-width: 768px)",
    mobile: "screen and (max-width: 576px)",
  },
  fonts: {
    heroTitle: "clamp(34px, 24.069px + 2.7586vw, 58px)",
    heroDesc: "clamp(18px, 17.1724px + 0.2299vw, 20px)",
    tickerTape: "clamp(18px, 14.6897px + 0.9195vw, 26px)",
    mainTitle: "clamp(30px, 21.7241px + 2.2989vw, 50px)",
    contactsTitle: "clamp(26px, 17.7241px + 2.2989vw, 46px)",
  },
};

export const darkTheme = {
  colors: {
    primaryBg: "linear-gradient(90deg, #1c3373 10.58%, #051850 84.62%);",
    secondaryBg:
      "linear-gradient(180deg, rgba(18, 35, 70, 0.2) 0%, rgba(10, 25, 50, 0.2) 47.12%, rgba(5, 20, 40, 0.2) 98.08%);",
    thirdBg: "#041442", 

    accentColor: "#0f3ab6",
    secondColor: "#2a5fd9",

    accentFontColor: "#fff",
    secondFontColor: "#fff",
    thirdFontColor: "#888888",
    fourthFontColor: "#000",

    mainBoxShadow: "0 0 21px 0 rgba(255,255,255,0.1)",

    tickerTapeColor: "#1e0f81",
    cardBg: ' #fff',
    cardLinkLineColor: '#b8c2dd',
     cardOverlay: 'rgba(2, 15, 54, 0.9);',
     btnOverlayHover: '#1f47b6',
  },
  media: {
    large: "screen and (min-width:1980px)",
    desktopLaptop: "screen and (min-width: 769px)",
    laptop: "screen and (max-width: 1024px)",
    tablet: "screen and (max-width: 768px)",
    mobile: "screen and (max-width: 576px)",
  },
  fonts: {
    heroTitle: "clamp(34px, 24.069px + 2.7586vw, 58px)",
    heroDesc: "clamp(18px, 17.1724px + 0.2299vw, 20px)",
    tickerTape: "clamp(18px, 14.6897px + 0.9195vw, 26px)",
    mainTitle: "clamp(30px, 21.7241px + 2.2989vw, 50px)",
    contactsTitle: "clamp(26px, 17.7241px + 2.2989vw, 46px)",
  },
};

export type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
