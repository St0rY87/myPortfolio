// import styled from "styled-components";
// import { HeaderMenuItem } from "./headerMenuItem/HeaderMenuItem";
// import { theme } from "../../../styles/Theme";

// export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  
//   return (
//     <StyledHeaderMenu>
//       <ListItems>
//         {props.menuItems.map((item) => (
//           <HeaderMenuItem key={item} item={item} />
//         ))}
//       </ListItems>
//     </StyledHeaderMenu>
//   );
// };

// const StyledHeaderMenu = styled.nav`
//   @media ${theme.media.tablet} {
//     display: none;
//   }
// `;

// const ListItems = styled.ul`
//   display: flex;
//   gap: 5px;
// `;


import styled from "styled-components";
import { HeaderMenuItem } from "./headerMenuItem/HeaderMenuItem";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  
  return (
    <StyledHeaderMenu>
      <ListItems>
        {props.menuItems.map((item) => (
          <HeaderMenuItem key={item} item={item} />
        ))}
      </ListItems>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

const ListItems = styled.ul`
  display: flex;
  gap: 5px;
`;
