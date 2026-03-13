import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Link } from "./link/Link";

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
  const { iconId, width, height, viewBox } = icon;
  const [isActiveOverlay, setIsActiveOverlay] = useState(false);

  function handleBtn() {
    setIsActiveOverlay((prev) => !prev);
  }
  return (
    <CardProject>
      <CardWrapper>
        <Img src={img} alt="" />
        <Footer>
          <Actions>
            {links.map(({ name, url }) => (
              <Link key={crypto.randomUUID()} as="a" name={name} url={url} />
            ))}
            <Link
              as="button"
              name={isActiveOverlay ? "hide" : "about"}
              onClick={handleBtn}
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
  min-height: 230px;
`;
const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 200px;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

const Img = styled.img`
  transition: 0.3s ease-in-out;
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
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
  top: calc(-100% + 40px);
  top: ${(props) => (props.$isActive ? "0px" : "calc(-100% + 40px)")};
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px 15px 0;
  color: #fff;
  width: 100%;
  height: calc(100% - 40px);
  border-bottom: 1px solid grey;
`;
const OverlayTitle = styled.h3`
  font-size: 16px;
`;
const Description = styled.p`
  font-size: 14px;
`;

const Button = styled.button``;
