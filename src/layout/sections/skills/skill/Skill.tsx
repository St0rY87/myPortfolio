import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

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
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 120px;
  height: 128px;
  border-radius: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: 0.2s ease-in-out;

 @media ${({ theme }) => theme.media.mobile} {
    width: 111px;
    height: 117px;
  }
`;

const SkillTitle = styled.h3`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  color: #000;
`
