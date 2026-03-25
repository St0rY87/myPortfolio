import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const HeaderMenuItem = (props: { item: string }) => {
  return (
    <ListItem>
      <Link href="#">{props.item}</Link>
    </ListItem>
  );
};

const ListItem = styled.li``;
const Link = styled.a`
  /* font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: ${theme.colors.accentFontColor};
  transition: 0.3s ease-in-out; */


  font-size: 20px;
  padding: 10px 15px;

  border-radius: 8px;
  position: relative;
  overflow: hidden;
  /* transition: 0.4s; */

  &:before {
    /* content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2159f2d9;

    opacity: 0;
    border-radius: 10px;
    transform: scale(0);
    transition: all 0.4s;
    z-index: -1; */


    /* clip-path: circle(0 at center);
  transition: clip-path 1s;
  z-index: -1; */
  }

  &:hover:before {
    /* opacity: 1;
    transform: scale(1); */

    /* clip-path: circle(100% at center); */
  }






 &::before,
 &::after {
  content: "";
  position: absolute;
  display: block;
  border: 0 solid transparent;
  width: 0%;
  height: 0%;
  border-radius: 10px;
  transition: all .6s ease;
  opacity: .5;
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
 &:hover::after {
  width: 100%;
  height: 100%;
  border-color: #ffffff;
}


`;

