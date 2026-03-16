import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      />
      <span>{props.title}</span>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 120px;
  height: 128px;
  border-radius: 10px;
  background: linear-gradient(0deg, #679ecf 0%, #3e738d 41.35%, #1d588c 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: ${theme.colors.mainBoxShadow};
  transition: 0.2s ease-in-out;
  & span {
    text-align: center;
  }

  &:hover {
    box-shadow: ${theme.colors.mainBoxShadow}, ${theme.colors.mainBoxShadow};
  }
`;
