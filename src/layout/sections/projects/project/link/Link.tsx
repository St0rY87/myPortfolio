import styled from "styled-components";

type LinkPropsType = {
  name: string;
  url?: string;
  as: "a" | "button";
  onClick?: () => void;
};

export const Link = (props: LinkPropsType) => {
  const {name, url, as = 'a', onClick} = props;
  return as === 'button' ?  <StyledLink as='button' onClick={onClick}>{name}</StyledLink> : <StyledLink as='a' href={url}>{name}</StyledLink>
};

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
