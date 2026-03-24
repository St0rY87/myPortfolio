import { theme } from "./Theme";

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  fontSize?: string;
};

export const font = ({
  family = "Roboto",
  weight = 400,
  color = theme.colors.accentFontColor,
  lineHeight = 1.3,
  fontSize = "16px",
}: FontPropsType) => `
    font-family: ${family};
    font-weight: ${weight};
    color: ${color};
    line-height: ${lineHeight};
    fontSize: ${fontSize};
`;
