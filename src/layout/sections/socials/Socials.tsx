import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SocialItem } from "./socialItem/SocialItem";

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
  padding: 60px;
  min-height: 30vh;
  background-color: #fff;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 30px;
`;
