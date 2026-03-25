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

const StyledSocialItem = styled.li``;

const SocialLink = styled.a`
  display: flex;
  width: 70px;
  aspect-ratio: 1;
  background-color: #e4eafb;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  @media ${theme.media.mobile} {
    width: 60px;
    svg {
      width: 35px;
    }
  }
`;
