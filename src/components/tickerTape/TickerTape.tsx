// import styled from "styled-components";
// import { theme } from "../../styles/Theme";
// import Marquee from "react-fast-marquee";

// export const TickerTape = ({listItems}: { listItems: Array<string> }) => {
//   const updatedListItems = [' ', ...listItems.flatMap(item => [item, '&&'])];

//   return (
//     <StyledTickerTape>
//       <Marquee speed={40}>
//         <WrapperWords>
//           {updatedListItems.map((item) => (
//             <span key={crypto.randomUUID()}>{item}</span>
//           ))}
//         </WrapperWords>
//       </Marquee>
//     </StyledTickerTape>
//   );
// };

// const StyledTickerTape = styled.div`
//   font-size: ${theme.fonts.tickerTape};
//   color: #fff;
//   background-color: ${theme.colors.accentColor};
//   /* background-color: #6666e0; */
//   z-index: 3;
//   padding-block: 10px;
//   overflow: hidden;
//   & span {
//     text-transform: uppercase;
//   }
// `;

// const WrapperWords = styled.div`
//   min-width: max-content;
//   display: flex;
//   gap: 30px;
//   flex-wrap: nowrap;

//   @media ${theme.media.tablet} {
//      gap: 20px;
//   }
// `;



import styled from "styled-components";
import Marquee from "react-fast-marquee";

export const TickerTape = ({listItems}: { listItems: Array<string> }) => {
  const updatedListItems = [' ', ...listItems.flatMap(item => [item, '&&'])];

  return (
    <StyledTickerTape>
      <Marquee speed={40}>
        <WrapperWords>
          {updatedListItems.map((item) => (
            <span key={crypto.randomUUID()}>{item}</span>
          ))}
        </WrapperWords>
      </Marquee>
    </StyledTickerTape>
  );
};

const StyledTickerTape = styled.div`
   font-size: ${({ theme }) => theme.fonts.tickerTape};;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.accentColor};
  /* background-color: #6666e0; */
  z-index: 3;
  padding-block: 10px;
  overflow: hidden;
  & span {
    text-transform: uppercase;
  }
`;

const WrapperWords = styled.div`
  min-width: max-content;
  display: flex;
  gap: 30px;
  flex-wrap: nowrap;

  @media ${({ theme }) => theme.media.tablet} {
     gap: 20px;
  }
`;
