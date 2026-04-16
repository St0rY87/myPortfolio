// import styled from "styled-components";
// import { Logo } from "../../components/logo/Logo";
// import { FlexWrapper } from "../../components/FlexWrapper";
// import moon from "../../assets/images/moon.png";
// import sun from "../../assets/images/sun.svg";
// import { Container } from "../../components/Container";
// import { theme } from "../../styles/Theme";
// import { HeaderMenu } from "./headerMenu/HeaderMenu";
// import { MobileMenu } from "./mobileMenu/MobileMenu";
// import { useState } from "react";

// const menuItems = ["Home", "Skills", "Projects", "Contacts"];

// export const Header = () => {
//  const [dark, isDark] = useState(false);

//  const toggleTheme = () => {
//     isDark((current) => !current);
//   }
//   return (
//     <StyledHeader>
//       <Container>
//         <FlexWrapper $justify="space-between">
//           <Logo />
//           <FlexWrapper $align="center" $gap="20px">
//             <HeaderMenu menuItems={menuItems} />
//             <MobileMenu menuItems={menuItems} />
//             <ThemeToggle onClick={toggleTheme}>
//               {dark ? <img src={sun} /> : <img src={moon} />}
//             </ThemeToggle>
//           </FlexWrapper>
//         </FlexWrapper>
//       </Container>
//     </StyledHeader>
//   );
// };

// const StyledHeader = styled.header`
//   background: ${theme.colors.primaryBg};
//   padding: 10px 0;
//   position: fixed;
//   opacity: 0.95;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 99;
//   @media ${theme.media.tablet} {
//     padding: 0;
//     opacity: unset;
//   }
// `;

// const ThemeToggle = styled.button`
//   padding: 10px;

//   border: none;
//   background-color: transparent;
//   cursor: pointer;
//   img {
//     width: 30px;
//     height: 34px;
//   }

//   @media ${theme.media.tablet} {
//     margin-right: 75px;
//     img {
//       width: 35px;
//     }
//   }
//   @media ${theme.media.mobile} {
//     margin-right: 60px;
//   }
// `;

import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import moon from "../../assets/images/moon.png";
import sun from "../../assets/images/sun.svg";
import { Container } from "../../components/Container";
// import { theme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const menuItems = ["Home", "Skills", "Projects", "Contacts"];

export const Header = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify="space-between">
          <Logo />
          <FlexWrapper $align="center" $gap="20px">
            <HeaderMenu menuItems={menuItems} />
            <MobileMenu menuItems={menuItems} />
            <ThemeToggle onClick={toggleTheme}>
              {dark ? <img src={sun} /> : <img src={moon} />}
            </ThemeToggle>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primaryBg};
  padding: 10px 0;
  position: fixed;
  opacity: 0.95;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  @media ${({ theme }) => theme.media.tablet} {
    padding: 0;
    opacity: unset;
  }
`;

const ThemeToggle = styled.button`
  padding: 10px;

  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 30px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-right: 75px;
    img {
      width: 35px;
    }
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin-right: 60px;
  }
`;
