import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SocialItem } from "./socialItem/SocialItem";
import { Fade } from "react-awesome-reveal";

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
          <Fade direction="down" cascade damping={0.2} fraction={1} triggerOnce>
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
          </Fade>
        </SocialList>
      </Container>
    </StyledSocials>
  );
};

export default Socials;

const StyledSocials = styled.section`
  background: rgb(4 20 66 / 79%);
  background: ${({ theme }) => theme.colors.thirdBg};
  background: #fff;
  padding: 60px;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 30px;
  position: relative;
  z-index: 1;

  @media ${({ theme }) => theme.media.mobile} {
    gap: 20px;
  }
`;
