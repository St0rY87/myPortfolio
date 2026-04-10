import styled from "styled-components";
import { Icon } from "../icon/Icon";

type ParallaxItemPropsType = {
  iconId: string;
  title: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const ParallaxItem = (props: ParallaxItemPropsType) => {
  return (
    <ItemZ>
      <ItemZ>
        <Icon
          iconId={props.iconId}
          width={props.width}
          height={props.height}
          viewBox={props.viewBox}
        />
      </ItemZ>
    </ItemZ>
  );
};

const ItemZ = styled.div`
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0rem);
`;

const ItemXY = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  display: flex;
`;
