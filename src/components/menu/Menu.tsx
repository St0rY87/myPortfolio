import styled from "styled-components";
import { MenuItem } from "./MenuItem";



export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map(item => <MenuItem key={item} item={item}/>)}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
width: max-content;
  ul {
    display: flex;
    gap: 50px;
    list-style-type: none;
  }
`;
