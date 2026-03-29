import { useRef, useState } from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import man from "../../../assets/images/man-with-laptop.svg";
import { Container } from "../../../components/Container";
import {
  ContactInfo,
  StyledContactInfo,
} from "../../../components/ContactInfo/ContactInfo";
import { AnimateField } from "./field/AnimateField";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export const Contacts = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [isResetForm, setIsResetForm] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setStatus("loading");
      await emailjs.sendForm(
        "service_b23njip",
        "template_hl26369",
        form.current,
        {
          publicKey: "ko6wMywjRT382kDvA",
        },
      );
      setStatus("success");
      toast.success("Message has been sent successfully!");
      form.current.reset();
      setIsResetForm(true);

      setTimeout(() => setIsResetForm(false), 100);
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("error");
      toast.error(
        "There was an error sending the message. Please try again later.",
      );
    }
  };

  return (
    <StyledContacts id="contacts">
      <Container>
        <TitleSection>Contacts</TitleSection>
        <ContactsWrapper>
          <FormTitle>Let’s stay in touch</FormTitle>
          <FlexWrapper $justify="space-between" $gap="40px">
            <Form ref={form} onSubmit={handleSubmit}>
              <AnimateField
                type="text"
                placeholder="Your Name"
                name="user_name"
                pattern="[a-zA-Z ]+"
                title="Please enter a valid name (letters only)"
                maxlength={30}
                isResetForm={isResetForm}
              />
              <AnimateField
                type="text"
                pattern="[0-9]{9,}"
                placeholder="Phone Number"
                name="phone_number"
                title="Please enter a valid phone number (at least 9 digits)"
                maxlength={15}
                isResetForm={isResetForm}
              />
              <AnimateField
                type="email"
                placeholder="Your email"
                name="email"
                isResetForm={isResetForm}
              />
              <TextArea
                required
                rows={7}
                placeholder="Your message"
                name="message"
              ></TextArea>
              <Button disabled={status === "loading"} type="submit">
                {status === "loading" ? (
                  <>
                    Sending... <Loader />
                  </>
                ) : (
                  "Send"
                )}
              </Button>
              <ToastContainer
                position="bottom-left"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </Form>
            <ContactInfo />
          </FlexWrapper>
          <Man src={man} alt="" />
        </ContactsWrapper>

        <ContactInfoWrapper>
          <ContactInfo />
          <Man src={man} alt="" />
        </ContactInfoWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding-block: 80px;
  @media ${theme.media.tablet} {
    padding-block: 60px;
  }
  @media ${theme.media.mobile} {
    padding: 30px 0 50px;
  }
`;

const Man = styled.img`
  transform: scaleX(-1);
  position: absolute;
  z-index: 1;
  bottom: -110px;
  right: 75px;
  width: 220px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const ContactInfoWrapper = styled.div`
  background-color: ${theme.colors.thirdBg};
  background-color: #fff;
  border-radius: 50px;
  padding: 50px;
  margin-top: 20px;
  position: relative;
  @media ${theme.media.desktopLaptop} {
    display: none;
  }
  @media ${theme.media.mobile} {
    padding: 30px;
  }
  ${Man} {
    display: block;
    bottom: -85px;
    right: 39px;
    width: 160px;
  }
  @media (max-width: 510px) {
    padding: 30px 0 180px 30px;
    ${Man} {
      display: block;
      bottom: -85px;
      right: 100px;
      width: 160px;
    }
  }
`;

const Form = styled.form`
  width: min(100%, 500px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  button {
    align-self: center;
  }

  @media ${theme.media.tablet} {
    margin-inline: auto;
  }
  @media ${theme.media.mobile} {
    gap: 20px;
  }
`;

const ContactsWrapper = styled.div`
  margin-inline: auto;
  width: min(100%, 1100px);
  display: flex;
  flex-direction: column;
  padding: 50px 80px;
  background-color: #fff;
  border-radius: 50px;
  gap: 40px;

  position: relative;

  @media ${theme.media.laptop} {
    padding: 50px;
  }

  @media ${theme.media.tablet} {
    ${StyledContactInfo} {
      display: none;
    }
    ${Man} {
      display: none;
    }
  }
  @media ${theme.media.mobile} {
    padding: 30px;
  }
`;

const FormTitle = styled.h3`
  color: ${theme.colors.accentColor};
  font-size: ${theme.fonts.contactsTitle};
  font-weight: bold;
  @media ${theme.media.tablet} {
    text-align: center;
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

// const Field = styled.input`
//   ${baseTextStyles}
//   border: none;
//   border-bottom: 2px solid ${theme.colors.thirdFontColor};
//   padding: 10px 0 6px;
// `;

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
  background-color: ${theme.colors.accentColor};
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;
  position: relative;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-4px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media ${theme.media.mobile} {
    width: 140px;
    margin-top: 0;
  }
`;

const Loader = styled.span`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: inline-block;
  border-top: 2px solid #fff;
  border-right: 2px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  position: absolute;
  top: 50%;
  right: 8%;

  @keyframes rotation {
    0% {
      transform: translateY(-50%) rotate(0deg);
    }
    100% {
      transform: translateY(-50%) rotate(360deg);
    }
  }
`;
