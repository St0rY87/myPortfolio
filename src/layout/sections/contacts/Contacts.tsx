import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
import man from "../../../assets/images/man-with-laptop.svg";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <TitleSection>Contacts</TitleSection>
        <ContactsWrapper>
          <FormWrapper>
            <FormTitle>Let’s stay in touch</FormTitle>
            <Form>
              <Field type="text" placeholder="Your Name" />
              <Field type="text" placeholder="Phone Number" />
              <Field type="email" placeholder="Your email" />
              <TextArea rows={7} placeholder="Your message"></TextArea>
              <Button type="submit">Send</Button>
            </Form>
          </FormWrapper>
          <ContactInfo>
            <ContactItem>
              <Icon
                iconId="location"
                width="29"
                height="36"
                viewBox="0 0 29 36"
              />
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
          </ContactInfo>
          <Man src={man} alt="" />
        </ContactsWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding-block: 90px;
`;

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  button {
    align-self: center;
  }
`;

const ContactsWrapper = styled.div`
  margin-inline: auto;
  width: min(100%, 1100px);
  display: flex;
  justify-content: space-between;
  padding: 50px 80px;
  background-color: #fff;
  border-radius: 50px;
  gap: 40px;

  position: relative;
`;

const FormWrapper = styled.div`
  width: min(100%, 500px);
`;
const FormTitle = styled.h3`
  color: #6190e8;
  font-size: 46px;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  margin-top: 110px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  &:nth-child(2) {
    margin: 30px 0 30px;
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

const baseTextStyles = `
  font-weight: 400;
  font-size: 14px;
  color: #000;
  &::placeholder {
    color: #CCCCCC;
  }
`;

const Field = styled.input`
  ${baseTextStyles}
  border: none;
  border-bottom: 2px solid ${theme.colors.thirdFontColor};
  padding: 10px 0 6px;
`;

const TextArea = styled.textarea`
  ${baseTextStyles}
  border: 2px solid ${theme.colors.thirdFontColor};
  padding: 10px;
  resize: vertical;
`;
const Button = styled.button`
  border-radius: 10px;
  height: 40px;
  width: 170px;
  background-color: #6190e8;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;
  &:hover {
    opacity: 0.9;
  }
`;

const Man = styled.img`
  transform: scaleX(-1);
  position: absolute;
  z-index: 1;
  bottom: -110px;
  right: 100px;
  width: 220px;
`;
