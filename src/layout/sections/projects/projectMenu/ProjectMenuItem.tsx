import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const ProjectMenuItem = (props: { item: string }) => {
  return (
    <ListItem>
      <Link href="#">{props.item}</Link>
    </ListItem>
  );
};

const ListItem = styled.li`
  &:last-child a:before {
    height: 0;
  }
  
  &:has(+ li a:hover) {
        & a:before {
            height: 0;
        }
    }
  
  &:first-child a {
    background-color: ${theme.colors.accentColor};
    border-radius: 10px;
    &:before{
        background: unset;
    }
  }
`;


const Link = styled.a`
  display: inline-block;
  padding: 0px 30px;
  line-height: 1.5;
  font-size: 28px;
  text-align: center;
  color: ${theme.colors.accentFontColor};
  font-weight: 600;

  transition: 0.1s ease-in-out;


  &:hover {
    background-color: ${theme.colors.accentColor};
    border-radius: 10px;
    &:before{
        background: unset;
    }
  }

  position: relative;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    top: 10%;
    right: 0;
    width: 2px;
    height: 80%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 25%,
      rgb(255, 255, 255) 77%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.3;
  }
`;
