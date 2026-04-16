// import styled from "styled-components";
// import { theme } from "../styles/Theme";

// type FlexWrapperPropsType = {
//   $direction?: string;
//   $justify?: string;
//   $align?: string;
//   $wrap?: string;
//   $gap?: string;
//   $gapMobile?: string;
//   $width?: string;
//   $margin?: string;
//   $marginTablet?: string;
//   $marginMobile?: string;
// };

// export const FlexWrapper = styled.div<FlexWrapperPropsType>`
//   display: flex;
//   flex-direction: ${(props) => props.$direction || null};
//   justify-content: ${(props) => props.$justify || null};
//   align-items: ${(props) => props.$align || null};
//   flex-wrap: ${(props) => props.$wrap || null};
//   gap: ${(props) => props.$gap || null};
//   width: ${(props) => props.$width || null};
//   margin: ${(props) => props.$margin || null};

//   @media ${theme.media.tablet} {
//     margin: ${(props) => props.$marginTablet || null};
//   }

//   @media ${theme.media.mobile} {
//     gap: ${(props) => props.$gapMobile || null};
//     margin: ${(props) => props.$marginMobile || null};
//   }
// `;
import styled from "styled-components";
// import { theme } from "../styles/Theme";

type FlexWrapperPropsType = {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $wrap?: string;
  $gap?: string;
  $gapMobile?: string;
  $width?: string;
  $margin?: string;
  $marginTablet?: string;
  $marginMobile?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.$direction || null};
  justify-content: ${(props) => props.$justify || null};
  align-items: ${(props) => props.$align || null};
  flex-wrap: ${(props) => props.$wrap || null};
  gap: ${(props) => props.$gap || null};
  width: ${(props) => props.$width || null};
  margin: ${(props) => props.$margin || null};

  @media ${({ theme }) => theme.media.tablet} {
    margin: ${(props) => props.$marginTablet || null};
  }

  @media ${({ theme }) => theme.media.mobile} {
    gap: ${(props) => props.$gapMobile || null};
    margin: ${(props) => props.$marginMobile || null};
  }
`;
