import styled, { css } from "styled-components";
import { menuItemsStatusType } from "../Projects";

type ProjectMenuItemProps = {
  item: { title: string; status: menuItemsStatusType };
  changeFilterStatus: (value: menuItemsStatusType) => void;
  currentStatus: menuItemsStatusType;
};

export const ProjectMenuItem = ({
  item,
  changeFilterStatus,
  currentStatus,
}: ProjectMenuItemProps) => {
  return (
    <ListItem>
      <Link
        $active={currentStatus === item.status ? true : false}
        onClick={() => {
          changeFilterStatus(item.status);
        }}
        as={"button"}
      >
        {item.title}
      </Link>
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
    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.accentFontColor};
    border-radius: 10px;
    &:before {
      background: unset;
    }
  }
`;

const Link = styled.a<{ $active?: boolean }>`
  display: inline-block;
  padding: 0px 20px;
  line-height: 1.5;
  font-size: 22px;
  text-align: center;
  color: ${({theme}) => theme.colors.secondFontColor};
  font-weight: 600;
  border-radius: 10px;

  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.accentFontColor};

    /* &:before {
      background: unset;
    } */
  }

  position: relative;
  z-index: 0;


  ${(props) =>
    props.$active &&
    css<{ $active?: boolean }>`
      background-color: ${({theme}) => theme.colors.accentColor};
      color: ${({theme}) => theme.colors.accentFontColor};
    `}

  @media ${({theme}) => theme.media.tablet} {
  }
  @media ${({theme}) => theme.media.mobile} {
    padding: 0px 15px;
    font-size: 16px;
  }
`;
