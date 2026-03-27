import styled, { css } from "styled-components";
import { theme } from "../../../../styles/Theme";
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
    /* background-color: ${theme.colors.accentColor}; */
    background-color: ${theme.colors.accentColor};
    color: ${theme.colors.accentFontColor};
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
  color: ${theme.colors.secondFontColor};
  font-weight: 600;
  border-radius: 10px;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.accentColor};
    color: ${theme.colors.accentFontColor};

    &:before {
      background: unset;
    }
  }

  position: relative;
  z-index: 0;

  /* &:before {
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
  } */

  ${(props) =>
    props.$active &&
    css<{ $active?: boolean }>`
      background-color: ${theme.colors.accentColor};
      color: ${theme.colors.accentFontColor};
    `}

  @media ${theme.media.tablet} {
    /* padding: 0px 20px; */
  }
`;
