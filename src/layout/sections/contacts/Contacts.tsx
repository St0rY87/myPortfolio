import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Contacts = () => {
  return (
    <StyledContacts>
      <TitleSection>Contacts</TitleSection>
      <ContactsWrapper>
        <FlexWrapper>
          <FormTitle>Let’s stay in touch</FormTitle>
          <Form>
            <Field type="text" placeholder="Your Name" />
            <Field type="text" placeholder="Phone Number" />
            <Field type="email" placeholder="Your email" />
            <Field as="textarea" rows={10}></Field>
            <button type="submit">Send message</button>
          </Form>
        </FlexWrapper>
        <ContactInfo>
          <ContactItem>
            <Icon iconId="location" width="29" height="36" viewBox="0 0 29 36" />
            <ContactItemInfo>
              <span>Belarus</span>
              <a href="#">Brest</a>
            </ContactItemInfo>
          </ContactItem>
          <ContactItem>
            <Icon iconId="phone" width="37" height="37" viewBox="0 0 37 37" />
            <ContactItemInfo>
              <span>Phone</span>
              <a href="tel:+375297290636">+375 29 7290636</a>
            </ContactItemInfo>
          </ContactItem>
          <ContactItem>
            <Icon iconId="email" width="36" height="27" viewBox="0 0 36 27" />
            <ContactItemInfo>
              <span>Email</span>
              <a href="mailto:mr.dima337@gmail.com">mr.dima337@gmail.com</a>
            </ContactItemInfo>
          </ContactItem>
        </ContactInfo>
      </ContactsWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding-block: 70px;
  background-color: #9ed19e;
`;

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: min(100%, 500px);
  gap: 10px;
  button {
    align-self: center;
  }
`;

const ContactsWrapper = styled.div`
  margin: 30px auto;
  width: min(100%, 1100px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FormTitle = styled.h3`
  color: #6190e8;
  font-size: 48px;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const ContactItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.input``;
