import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderMenuItem = (props: { item: string }) => {
  return (
    <ListItem>
      <NavLink
        activeClass="active"
        to={`${props.item.toLowerCase()}`}
        smooth={true}
        spy={true}
        offset={-76}
      >
        {props.item}
      </NavLink>
    </ListItem>
  );
};

const ListItem = styled.li``;
const NavLink = styled(Link)`
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    border: 0 solid transparent;
    width: 0%;
    height: 0%;
    border-radius: 10px;
    transition: all 0.6s ease;
    opacity: 0.5;
  }

  &::after {
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  &::before {
    right: 0;
    bottom: 0;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  &:hover::before,
  &:hover::after,
  &.active {
    width: 100%;
    height: 100%;
    border-color: #ffffff;
  }

  &.active::before,
  &.active::after {
    width: 100%;
    height: 100%;
    border-color: #ffffff;
  }
`;
