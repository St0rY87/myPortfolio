import { useRef, useState } from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { AnimateField } from "./field/AnimateField";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { Man, StyledMan } from "../../../components/man/Man";
import { ContactInfo, StyledContactInfo } from "../../../components/contactInfo/ContactInfo";

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
        <Fade direction="up" fraction={0.7} triggerOnce>
          <TitleSection>Contacts</TitleSection>
        </Fade>
        <ContactsWrapper>
          <FormTitle>Let’s stay in touch</FormTitle>
          <FlexWrapper $justify="space-between" $gap="40px">
            <Form ref={form} onSubmit={handleSubmit}>
              <AnimateField
                type="text"
                placeholder="Your Name"
                name="user_name"
                pattern="[a-zA-Zа-яА-ЯёЁ ]+"
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
          <Man />
        </ContactsWrapper>

        <ContactInfoWrapper>
          <ContactInfo />
          <Man />
        </ContactInfoWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding-block: 80px;
  @media ${({ theme }) => theme.media.tablet} {
    padding-block: 60px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding: 30px 0 50px;
  }
`;

const ContactInfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.thirdBg};
  background-color: #fff;
  border-radius: 50px;
  padding: 50px;
  margin-top: 20px;
  position: relative;
  @media ${({ theme }) => theme.media.desktopLaptop} {
    display: none;
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding: 30px;
  }

  ${StyledMan} {
    display: block;
    bottom: -85px;
    right: 39px;
    width: 160px;
  }
  @media (max-width: 510px) {
    padding: 30px 0 180px 30px;
    ${StyledMan} {
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

  @media ${({ theme }) => theme.media.tablet} {
    margin-inline: auto;
  }
  @media ${({ theme }) => theme.media.mobile} {
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

  @media ${({ theme }) => theme.media.laptop} {
    padding: 50px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    ${StyledContactInfo} {
      display: none;
    }
    ${StyledMan} {
      display: none;
    }
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding: 30px;
  }
`;

const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: ${({ theme }) => theme.fonts.contactsTitle};
  font-weight: bold;
  @media ${({ theme }) => theme.media.tablet} {
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
//   border-bottom: 2px solid ${({theme}) => theme.colors.thirdFontColor};
//   padding: 10px 0 6px;
// `;

const TextArea = styled.textarea`
  ${baseTextStyles}
  border: 2px solid ${({ theme }) => theme.colors.thirdFontColor};
  padding: 10px;
  resize: vertical;
`;
const Button = styled.button`
  border-radius: 10px;
  height: 40px;
  width: 170px;
  background-color: ${({ theme }) => theme.colors.accentColor};
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

  @media ${({ theme }) => theme.media.mobile} {
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
  right: 12px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 17px;
    right: 7px;
  }

  @keyframes rotation {
    0% {
      transform: translateY(-50%) rotate(0deg);
    }
    100% {
      transform: translateY(-50%) rotate(360deg);
    }
  }
`;
