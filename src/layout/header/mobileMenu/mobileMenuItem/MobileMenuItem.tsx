import styled from "styled-components";
import { Link } from "react-scroll";

type MobileMenuItemProps = {
  item: string;
  showMenu: () => void;
};

export const MobileMenuItem = ({ item, showMenu }: MobileMenuItemProps) => {
  return (
    <ListItem>
      <NavLink smooth={true}  offset={-58} onClick={showMenu} to={`${item.toLowerCase()}`}>
        {item}
      </NavLink>
    </ListItem>
  );
};

const ListItem = styled.li`
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const NavLink = styled(Link)`
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.accentFontColor};
  transition: 0.3s ease-in-out;
`;
