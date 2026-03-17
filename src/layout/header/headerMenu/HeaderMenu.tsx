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

const StyledHeaderMenu = styled.nav``;

const ListItems = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 30px;
`;
