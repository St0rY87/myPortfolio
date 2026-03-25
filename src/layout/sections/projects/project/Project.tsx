import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Link } from "./link/Link";
import { Button } from "../../../../components/Button";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  title: string;
  img: string;
  description: string;
  icon: {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
  };
  links: Array<{
    name: string;
    url: string;
  }>;
};

export const Project = ({
  title,
  img,
  description,
  icon,
  links,
}: ProjectPropsType) => {
  const [isActiveOverlay, setIsActiveOverlay] = useState(false);
  const { iconId, width, height, viewBox } = icon;

  function handleBtn() {
    setIsActiveOverlay((prev) => !prev);
  }

  return (
    <CardProject>
      <CardWrapper>
        <ImageWrapper>
          <Img src={img} alt="" />
          <Button>View project</Button>
        </ImageWrapper>
        <Footer>
          <Actions>
            {links.map(({ name, url }) => (
              <Link key={crypto.randomUUID()} as="a" name={name} url={url} />
            ))}
            <Link
              as="button"
              name={isActiveOverlay ? "hide" : "about"}
              onClick={handleBtn}
              isActiveOverlay={isActiveOverlay}
            />
          </Actions>
          <Icon
            iconId={iconId}
            width={width}
            height={height}
            viewBox={viewBox}
          />
        </Footer>
        <Overlay $isActive={isActiveOverlay}>
          <OverlayTitle>{title}</OverlayTitle>
          <Description>{description}</Description>
        </Overlay>
      </CardWrapper>
      <Title>{title}</Title>
    </CardProject>
  );
};

const CardProject = styled.article`
  width: 100%;
  max-width: 380px;
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% - 40px);
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    &::before {
      content: "";
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      content: "";
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

const CardWrapper = styled.div`
  z-index: 0;
  border-radius: 15px;
  overflow: hidden;
  height: 200px;
  /* box-shadow: 0 0 8px 8px rgba(255, 255, 255, 0.27); */
  box-shadow: 0 0 6px 2px rgb(79 75 75 / 27%);
  position: relative;
`;

const Title = styled.h3`
  margin-top: 10px;
  /* text-align: center; */
  font-size: 22px;
  color: ${theme.colors.secondFontColor};
  /* font-weight: 500; */
`;

const Img = styled.img`
  transition: 0.3s ease-in-out;
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
  }
`;

const Footer = styled.div`
  padding: 0 15px;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 40px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Overlay = styled.div<{ $isActive: boolean }>`
  transition: 0.3s linear;
  position: absolute;
  top: ${(props) => (props.$isActive ? "0px" : "calc(-100% + 40px)")};
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  width: 100%;
  overflow: auto;
  height: calc(100% - 40px);
  border-bottom: 1px solid grey;
  padding: 20px 15px;
`;
const OverlayTitle = styled.h4`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.06em;
`;
const Description = styled.p`
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
`;
