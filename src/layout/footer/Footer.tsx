import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
        <Logo />
        <Copyright>All Rights Reserved 2026©</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height:150px;
  background: ${theme.colors.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Copyright = styled.small`
  font-size: 12px;
  color: #fff;
`;
