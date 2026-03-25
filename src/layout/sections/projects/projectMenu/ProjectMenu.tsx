import styled from "styled-components";
import { ProjectMenuItem } from "./ProjectMenuItem";
import { theme } from "../../../../styles/Theme";

export const ProjectMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledProjectMenu>
      <List>
        {props.menuItems.map((item) => (
          <ProjectMenuItem key={item} item={item} />
        ))}
      </List>
    </StyledProjectMenu>
  );
};

const StyledProjectMenu = styled.nav`
  width: 100%;
  position: relative;

  /* &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 25%,
      rgb(255, 255, 255) 77%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.3;
  }

  &:before {
    top: -2px;
  } */
`;

const List = styled.ul`
margin-inline: auto;
  width: max-content;
  border-radius: 10px;
  display: flex;
  list-style-type: none;
  /* background: rgba(0, 0, 0, 0.2); */

  @media ${theme.media.mobile} {
    border-radius: 7px;
  }
`;
