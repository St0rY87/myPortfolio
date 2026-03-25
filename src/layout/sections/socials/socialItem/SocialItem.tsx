import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SocialItemProps = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  url: string;
};

export const SocialItem = ({
  url,
  iconId,
  width,
  height,
  viewBox,
}: SocialItemProps) => {
  return (
    <StyledSocialItem>
      <SocialLink target="_blank" href={url}>
        <Icon
          iconId={iconId}
          width={width}
          height={height}
          viewBox={viewBox}
        ></Icon>
      </SocialLink>
    </StyledSocialItem>
  );
};

const StyledSocialItem = styled.li`
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const SocialLink = styled.a`
  display: flex;
  width: 70px;
  aspect-ratio: 1;
  background-color: #e4eafb;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.6s ease-in-out;
  &:hover {
    background-color: #2157f2;
    & svg {
      fill: #e4eafb;
    }
  }

  svg {
    fill: #2157f2;
    transition: 0.3s ease-in-out;
  }

  @media ${theme.media.mobile} {
    width: 60px;
    svg {
      width: 35px;
    }
  }
`;


