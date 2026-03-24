import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>All Rights Reserved 2026©</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding-block: 30px;
  background: ${theme.colors.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

`;

const Copyright = styled.small`
  font-size: 12px;
  color: #fff;
`;

// export const Footer = () => {
//   return (
//     <>
//       <StyledFooter>
//         <Wave>
//           <svg viewBox="0 0 120 28">
//             <path
//               id="wave"
//               d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
//             ></path>
//             <path
//               id="wave2"
//               d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
//             ></path>
//           </svg>
//         </Wave>
//         <div>
//           <Logo />
//          <Copyright>All Rights Reserved 2026©</Copyright>
//         </div>
//       </StyledFooter>
//     </>
//   );
// };

// const StyledFooter = styled.footer`
//   /* min-height: 150px; */
//   /* background: ${theme.colors.primaryBg}; */
//   /* display: flex; */
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 20px;
// `;

// const Copyright = styled.small`
//   font-size: 12px;
//   color: #fff;
// `;

// const Wave = styled.div`
//   svg {
//     fill: #355ecf;
//   }

//   svg path {
//     animation: wave 3s linear;
//     animation-iteration-count: infinite;
//   }
//   svg #wave {
//     animation-duration: 5s;
//     animation-direction: reverse;
//     opacity: 0.6;
//   }

//   svg #wave2 {
//     animation-duration: 7s;
//     opacity: 0.3;
//   }

//   @keyframes wave {
//     to {
//       transform: translateX(-100%);
//     }
//   }
// `;
