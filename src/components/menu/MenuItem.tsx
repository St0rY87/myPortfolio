import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const MenuItem = (props: { item: string }) => {
  return (
    <ListItem>
      <Link href="#">{props.item}</Link>
    </ListItem>
  );
};


const ListItem = styled.li`
  
`
const Link = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: ${theme.colors.accentFontColor};

  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`