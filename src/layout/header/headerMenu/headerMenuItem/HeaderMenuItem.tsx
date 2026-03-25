import styled from "styled-components";
import { theme } from "../../../../styles/Theme";


export const HeaderMenuItem = (props: { item: string }) => {
  return (
    <ListItem>
      <Link href="#">{props.item}</Link>
    </ListItem>
  );
};


const ListItem = styled.li`
  
`
const Link = styled.a`
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: ${theme.colors.accentFontColor};
  opacity: 0.8;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`