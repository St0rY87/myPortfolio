import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Contacts = () => {
  return (
    <StyledContacts>
      <TitleSection>Contacts</TitleSection>
      <FormWrapper>
        <Form>
        <FormTitle>Let’s stay in touch</FormTitle>
        <Field type="text" placeholder="Your Name"/>
        <Field type="text" placeholder="Phone Number" />
        <Field type="email" placeholder="Your email" />
        <Field as='textarea'></Field>
        <button type='submit'>Send</button>
        </Form>
        <ContactInfo>
          <ContactItem>
            <Icon iconId="minjs" width="20" height="20" viewBox="0 0 20 20" />
            <ContactItemInfo>
              <span>Belarus</span>
              <a href="#">Brest</a>
            </ContactItemInfo>
          </ContactItem>
          <ContactItem>
            <Icon iconId="minjs" width="20" height="20" viewBox="0 0 20 20" />
            <ContactItemInfo>
              <span>Phone</span>
              <a href="tel:+375297290636">+375 29 7290636</a>
            </ContactItemInfo>
          </ContactItem>
          <ContactItem>
            <Icon iconId="minjs" width="20" height="20" viewBox="0 0 20 20" />
            <ContactItemInfo>
              <span>Email</span>
              <a href="mailto:mr.dima337@gmail.com">mr.dima337@gmail.com</a>
            </ContactItemInfo>
          </ContactItem>
        </ContactInfo>
      </FormWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding-block: 70px;
  background-color: #9ed19e;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

const FormWrapper = styled.div`
    margin-inline: auto;
    width: min(100%, 1100px);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const FormTitle = styled.h3`
    color: #6190E8;
    font-size: 48px;
    font-weight: bold;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContactItem = styled.div`
  display: flex;
  gap: 30px;
`;
const ContactItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;


const Field = styled.input`
    
`