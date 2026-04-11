// import styled from "styled-components";
// import { Icon } from "../icon/Icon";

// type ParallaxItemPropsType = {
//   iconId?: string;
//   width?: string;
//   height?: string;
//   viewBox?: string;

//   depth?: "plus-2" | "plus-1" | "minus-1" | "minus-2" | "0";
//   outline?: boolean;
//   bright?: boolean;
//   dull?: boolean;
// };

// export const ParallaxItem = ({
//   iconId,
//   width,
//   height,
//   viewBox,

//   bright = false,
//   dull = false,
//   outline = false,
//   depth = "0",
// }: ParallaxItemPropsType) => {
//   return (
//     <ItemZ $depth={depth}>
//       <ItemXY $outline={outline} $bright={bright} $dull={dull}>
//         <Icon iconId={iconId} width={width} height={height} viewBox={viewBox} />
//       </ItemXY>
//     </ItemZ>
//   );
// };

// const getDepthValue = (depth: string): string => {
//   switch (depth) {
//     case "plus-2":
//       return "6rem";
//     case "plus-1":
//       return "3rem";
//     case "minus-1":
//       return "-3rem";
//     case "minus-2":
//       return "-6rem";
//     default:
//       return "0rem";
//   }
// };

// const ItemZ = styled.div<{ $depth: string }>`
//   transform-style: preserve-3d;
//   transform: translate3d(0, 0, ${(props) => getDepthValue(props.$depth)});
// `;

// const ItemXY = styled.div<{
//   $outline?: boolean;
//   $dull?: boolean;
//   $bright?: boolean;
// }>`

//   background-color: ${(props) => {
//     if (props.$outline) return "transparent";
//     if (props.$bright) return "rgba(255, 255, 255, 0.2)";
//     if (props.$dull) return "rgba(255, 255, 255, 0.05)";
//     return "rgba(255, 255, 255, 0.1)";
//   }};

//   border: 1px solid
//     ${(props) => (props.$outline ? "rgba(255, 255, 255, 0.1)" : "none")};
//   border-radius: 1rem;
//   justify-content: center;
//   align-items: center;
//   width: 4rem;
//   height: 4rem;
//   display: flex;
// `;

import styled from "styled-components";
import { Icon } from "../../icon/Icon";

type DepthType = "plus-2" | "plus-1" | "minus-1" | "minus-2" | "0";
type VariantType = "outline" | "bright" | "dull" | "default" | "none";

type ParallaxItemPropsType = {
  iconId?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  depth?: DepthType;
  variant?: VariantType;
};

const variantStyles = {
  outline: {
    background: "transparent",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  bright: {
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
  },
  dull: {
    background: "rgba(255, 255, 255, 0.05)",
    border: "none",
  },
  default: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "none",
  },
  none: {
    background: "",
    border: "none",
  },
};

const depthMap: Record<DepthType, string> = {
  "plus-2": "6rem",
  "plus-1": "3rem",
  "minus-1": "-3rem",
  "minus-2": "-6rem",
  "0": "0rem",
};

export const ParallaxItem = ({
  iconId,
  width,
  height,
  viewBox,
  depth = "0",
  variant = "default",
}: ParallaxItemPropsType) => {
  const showIcon = variant !== "none";
  
  return (
    <ItemZ $depth={depth}>
      <ItemXY $variant={variant}>
        {showIcon && (
          <Icon
            iconId={iconId}
            width={width}
            height={height}
            viewBox={viewBox}
          />
        )}
      </ItemXY>
    </ItemZ>
  );
};

const ItemZ = styled.div<{ $depth: DepthType }>`
  transform-style: preserve-3d;
  transform: translate3d(0, 0, ${({ $depth }) => depthMap[$depth]});
  color: rgba(255, 255, 255, 0.7);
`;

const ItemXY = styled.div<{ $variant: VariantType }>`
  background-color: ${({ $variant }) => variantStyles[$variant].background};
  border: ${({ $variant }) => variantStyles[$variant].border};
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  display: flex;
`;
