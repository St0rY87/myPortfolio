import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
  width?: string;
  height?: string;
  viewBox?: string;
};



export const Skill = (props:SkillPropsType) => {
//   console.log(props);
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
  min-width: 150px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border: 2px solid blue;
`;
