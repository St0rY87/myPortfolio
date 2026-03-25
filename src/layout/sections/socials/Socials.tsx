import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SocialItem } from "./socialItem/SocialItem";
import { theme } from "../../../styles/Theme";

const socialIcons = [
  {
    iconId: "github",
    width: "40",
    height: "44",
    viewBox: "0 0 40 44",
    url: "#",
  },
  {
    iconId: "insta",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    url: "#",
  },
  {
    iconId: "linkedin",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    url: "#",
  },
  {
    iconId: "telegram",
    width: "40",
    height: "37",
    viewBox: "0 0 40 37",
    url: "#",
  },
];

const Socials = () => {
  return (
    <StyledSocials>
      <Container>
        <SocialList>
          {socialIcons.map(({ url, iconId, width, height, viewBox }) => (
            <SocialItem
              key={crypto.randomUUID()}
              iconId={iconId}
              width={width}
              height={height}
              viewBox={viewBox}
              url={url}
            />
          ))}
        </SocialList>
      </Container>
    </StyledSocials>
  );
};

export default Socials;

const StyledSocials = styled.section`
  background: ${theme.colors.thirdBg};
  padding: 60px;
  margin-bottom: -175px;
  background-color: #fff;

  @media ${theme.media.laptop} {
    margin-bottom: -145px;
  }
  @media ${theme.media.tablet} {
    padding-block: 50px;
    margin-bottom: -85px;
  }
  @media ${theme.media.mobile} {
    padding-block: 40px;
    margin-bottom: -55px;
  }
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 30px;
  position: relative;
  z-index: 1;

  @media ${theme.media.mobile} {
    gap: 20px;
  }
`;
