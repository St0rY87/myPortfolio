import styled from "styled-components";
import { theme } from "../styles/Theme";

export const TitleSection = styled.h2`
  position: relative;
  margin: 0;
  text-align: center;
  font-size: ${theme.fonts.mainTitle};
  margin-bottom: 90px;

  &::before {
    content: "";
    display: inline-block;
    width: 90px;
    height: 5px;
    background-color: ${theme.colors.accentColor};

    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${theme.media.tablet} {
    margin-bottom: 60px;
    &::before {
      bottom: -15px;
    }
  }
`;
