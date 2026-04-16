// import styled from "styled-components";
// import { Icon } from "../../icon/Icon";
// import { theme } from "../../../styles/Theme";

// export type DepthType = "plus-2" | "plus-1" | "minus-1" | "minus-2" | "0";
// export type VariantType = "outline" | "bright" | "dull" | "default" | "none";

// type ParallaxItemPropsType = {
//   iconId?: string;
//   width?: string;
//   height?: string;
//   viewBox?: string;
//   depth?: DepthType;
//   variant?: VariantType;
// };

// const variantStyles = {
//   outline: {
//     background: "transparent",
//     border: "1px solid rgba(255, 255, 255, 0.1)",
//   },
//   bright: {
//     background: "rgba(255, 255, 255, 0.2)",
//     border: "none",
//   },
//   dull: {
//     background: "rgba(255, 255, 255, 0.05)",
//     border: "none",
//   },
//   default: {
//     background: "rgba(255, 255, 255, 0.1)",
//     border: "none",
//   },
//   none: {
//     background: "",
//     border: "none",
//   },
// };

// const depthMap: Record<DepthType, string> = {
//   "plus-2": "6rem",
//   "plus-1": "3rem",
//   "minus-1": "-3rem",
//   "minus-2": "-6rem",
//   "0": "0rem",
// };

// // Функция для получения класса глубины (нужен для JS логики)
// const getDepthClass = (depth: DepthType): string => {
//   switch (depth) {
//     case "plus-2":
//       return "depth-plus-2";
//     case "plus-1":
//       return "depth-plus-1";
//     case "minus-1":
//       return "depth-minus-1";
//     case "minus-2":
//       return "depth-minus-2";
//     default:
//       return "";
//   }
// };

// export const ParallaxItem = ({
//   iconId,
//   width,
//   height,
//   viewBox,
//   depth = "0",
//   variant = "default",
// }: ParallaxItemPropsType) => {
//   const showIcon = variant !== "none";
//   const depthClass = getDepthClass(depth);

//   return (
//     <ItemZ $depth={depth} className={depthClass}>
//       <ItemXY $variant={variant} className="item-x-y">
//         {showIcon && (
//           <Icon
//             iconId={iconId}
//             width={width}
//             height={height}
//             viewBox={viewBox}
//           />
//         )}
//       </ItemXY>
//     </ItemZ>
//   );
// };

// const ItemZ = styled.div<{ $depth: DepthType }>`
//   transform: translate3d(0, 0, ${({ $depth }) => depthMap[$depth]});
//   color: rgba(255, 255, 255, 0.7);
//   &:nth-child(32),
//   &:nth-child(33),
//   &:nth-child(34) {
//     display: none;
//   }
//   @media ${theme.media.laptop} {
//     scale: 0.8;
//     opacity: 0.8;
//     &:nth-child(2),
//     &:nth-child(4),
//     &:nth-child(28) {
//       opacity: 0;
//     }
//   }
//   @media ${theme.media.tablet} {
//     &:nth-child(12),
//     &:nth-child(35) {
//       opacity: 0;
//     }

//     &:nth-child(2) {
//       opacity: 0.8;
//     }
//   }
//   @media ${theme.media.mobile} {
//     scale: 0.7;
//     & {
//       opacity: 0.7;
//     }
//     &:nth-child(32),
//     &:nth-child(33),
//     &:nth-child(34) {
//       display: block;
//     }
//     &:nth-child(1),
//     &:nth-child(2),
//     &:nth-child(8),
//     &:nth-child(9),
//     &:nth-child(10),
//     &:nth-child(17),
//     &:nth-child(23),
//     &:nth-child(17),
//     &:nth-child(23),
//     &:nth-child(30) {
//       opacity: 0;
//     }
//   }
// `;

// const ItemXY = styled.div<{ $variant: VariantType }>`
//   background-color: ${({ $variant }) => variantStyles[$variant].background};
//   border: ${({ $variant }) => variantStyles[$variant].border};
//   border-radius: 1rem;
//   justify-content: center;
//   align-items: center;
//   width: 4rem;
//   height: 4rem;
//   display: flex;
//   @media ${theme.media.laptop} {
//   }
// `;


import styled from "styled-components";
import { Icon } from "../../icon/Icon";

export type DepthType = "plus-2" | "plus-1" | "minus-1" | "minus-2" | "0";
export type VariantType = "outline" | "bright" | "dull" | "default" | "none";

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

// Функция для получения класса глубины (нужен для JS логики)
const getDepthClass = (depth: DepthType): string => {
  switch (depth) {
    case "plus-2":
      return "depth-plus-2";
    case "plus-1":
      return "depth-plus-1";
    case "minus-1":
      return "depth-minus-1";
    case "minus-2":
      return "depth-minus-2";
    default:
      return "";
  }
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
  const depthClass = getDepthClass(depth);

  return (
    <ItemZ $depth={depth} className={depthClass}>
      <ItemXY $variant={variant} className="item-x-y">
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
  transform: translate3d(0, 0, ${({ $depth }) => depthMap[$depth]});
  color: rgba(255, 255, 255, 0.7);
  &:nth-child(32),
  &:nth-child(33),
  &:nth-child(34) {
    display: none;
  }
  @media ${({ theme }) => theme.media.laptop} {
    scale: 0.8;
    opacity: 0.8;
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(28) {
      opacity: 0;
    }
  }
  @media ${({ theme }) => theme.media.tablet} {
    &:nth-child(12),
    &:nth-child(35) {
      opacity: 0;
    }

    &:nth-child(2) {
      opacity: 0.8;
    }
  }
  @media ${({ theme }) => theme.media.mobile} {
    scale: 0.7;
    & {
      opacity: 0.7;
    }
    &:nth-child(32),
    &:nth-child(33),
    &:nth-child(34) {
      display: block;
    }
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(17),
    &:nth-child(23),
    &:nth-child(17),
    &:nth-child(23),
    &:nth-child(30) {
      opacity: 0;
    }
  }
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
