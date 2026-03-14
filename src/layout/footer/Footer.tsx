import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";

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
  background-color: #399dd6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Copyright = styled.small`
  font-size: 12px;
  color: #fff;
`;
