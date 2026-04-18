import styled from "styled-components";
import { ProjectMenuItem } from "./ProjectMenuItem";
import { menuItemsStatusType } from "../Projects";

type ProjectMenuProps = {
   menuItems: Array<{title: string, status: menuItemsStatusType}>
   changeFilterStatus : (value:menuItemsStatusType) => void 
   currentStatus: menuItemsStatusType;
}

export const ProjectMenu = ({menuItems, changeFilterStatus, currentStatus}: ProjectMenuProps) => {
  return (
    <StyledProjectMenu>
      <List>
        {menuItems.map((item) => (
          <ProjectMenuItem changeFilterStatus={changeFilterStatus} key={item.title} item={item} currentStatus={currentStatus} />
        ))}
      </List>
    </StyledProjectMenu>
  );
};

const StyledProjectMenu = styled.nav`
  width: 100%;
  position: relative;
`;

const List = styled.ul`
margin-inline: auto;
  width: max-content;
  border-radius: 10px;
  display: flex;
  list-style-type: none;
  /* background: rgba(0, 0, 0, 0.2); */

  gap: 10px;

  @media ${({theme}) => theme.media.mobile} {
    border-radius: 7px;
    gap: 5px;
  }
`;
