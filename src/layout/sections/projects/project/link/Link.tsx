import styled from "styled-components";

type LinkPropsType = { name: string; url: string };

export const Link = (props: LinkPropsType) => {
  return <StyledLink href={props.url}>{props.name}</StyledLink>;
};

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
`;
