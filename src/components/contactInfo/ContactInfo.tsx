import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const ContactInfo = () => {
  return (
    <StyledContactInfo>
        <ContactItem>
          <Icon iconId="location" width="37" height="36" viewBox="0 0 29 36" />
          <ContactItemInfo>
            <span>Belarus</span>
            <ContactItemLink
              href="https://maps.app.goo.gl/THZQkt5aDuEe48bo7"
              target="_blank"
            >
              Brest
            </ContactItemLink>
          </ContactItemInfo>
        </ContactItem>
        <ContactItem>
          <Icon iconId="phone" width="37" height="37" viewBox="0 0 37 37" />
          <ContactItemInfo>
            <span>Phone</span>
            <ContactItemLink href="tel:+375297290636">
              +375 29 7290636
            </ContactItemLink>
          </ContactItemInfo>
        </ContactItem>
        <ContactItem>
          <Icon iconId="email" width="36" height="27" viewBox="0 0 36 27" />
          <ContactItemInfo>
            <span>Email</span>
            <ContactItemLink href="mailto:mr.dima337@gmail.com">
              mr.dima337@gmail.com
            </ContactItemLink>
          </ContactItemInfo>
        </ContactItem>
    </StyledContactInfo>
  );
};

export const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  color: ${({theme}) => theme.colors.accentColor};
  @media ${({theme}) => theme.media.mobile} {
    gap: 20px;
  }
`;

const ContactItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: black;
`;

const ContactItemLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  color: #8b8b8b;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
