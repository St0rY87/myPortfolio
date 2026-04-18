import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

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
  & svg {
    color: ${({theme}) => theme.colors.accentColor};
  }
  &:hover {
    background-color: ${({theme}) => theme.colors.accentColor};
    & svg {
      color: #e4eafb;
    }
  }


  @media ${ ({theme}) => theme.media.mobile} {
    width: 60px;
    svg {
      width: 35px;
    }
  }
`;


