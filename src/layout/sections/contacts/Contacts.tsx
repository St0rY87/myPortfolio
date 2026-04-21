// import { useRef, useState } from "react";
// import styled from "styled-components";
// import { TitleSection } from "../../../components/TitleSection";
// import { FlexWrapper } from "../../../components/FlexWrapper";
// import { Container } from "../../../components/Container";
// import { AnimateField } from "./field/AnimateField";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import { Fade } from "react-awesome-reveal";
// import { Man, StyledMan } from "../../../components/man/Man";
// import {
//   ContactInfo,
//   StyledContactInfo,
// } from "../../../components/contactInfo/ContactInfo";

// export const Contacts = () => {
//   const [status, setStatus] = useState<
//     "idle" | "loading" | "success" | "error"
//   >("idle");

//   const [isResetForm, setIsResetForm] = useState(false);
//   const [messageValue, setMessageValue] = useState("");

//   const form = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!form.current) return;

//     try {
//       setStatus("loading");
//       await emailjs.sendForm(
//         "service_b23njip",
//         "template_hl26369",
//         form.current,
//         {
//           publicKey: "ko6wMywjRT382kDvA",
//         },
//       );
//       setStatus("success");
//       toast.success("Message has been sent successfully!");
//       form.current.reset();
//       setMessageValue("");
//       setIsResetForm(true);

//       setTimeout(() => setIsResetForm(false), 100);
//     } catch (error) {
//       console.error("FAILED...", error);
//       setStatus("error");
//       toast.error(
//         "There was an error sending the message. Please try again later.",
//       );
//     }
//   };

//   return (
//     <StyledContacts id="contacts">
//       <Container>
//         <Fade direction="up" fraction={0.7} triggerOnce>
//           <TitleSection>Contacts</TitleSection>
//         </Fade>
//         <ContactsWrapper>
//           <FormTitle>Let’s stay in touch</FormTitle>
//           <FlexWrapper $justify="space-between" $gap="40px">
//             <Form ref={form} onSubmit={handleSubmit}>
//               <AnimateField
//                 type="text"
//                 placeholder="Your Name"
//                 name="user_name"
//                 pattern="[a-zA-Zа-яА-ЯёЁ ]+"
//                 title="Please enter a valid name (letters only)"
//                 maxlength={20}
//                 minlength={3}
//                 isResetForm={isResetForm}
//               />
//               <AnimateField
//                 type="text"
//                 pattern="[0-9]{12,}"
//                 placeholder="Phone Number"
//                 name="phone_number"
//                 title="Please enter a valid phone number (at least 12 digits)"
//                 maxlength={12}
//                 isResetForm={isResetForm}
//               />
//               <AnimateField
//                 type="email"
//                 placeholder="Your email"
//                 name="email"
//                 isResetForm={isResetForm}
//               />
//               <TextArea
//                 required
//                 rows={7}
//                 minLength={30}
//                 maxLength={500}
//                 placeholder="Your message"
//                 name="message"
//                 value={messageValue}
//                 onChange={(e) => setMessageValue(e.target.value)}
//               ></TextArea>
//               <Button disabled={status === "loading"} type="submit">
//                 {status === "loading" ? (
//                   <>
//                     Sending... <Loader />
//                   </>
//                 ) : (
//                   "Send"
//                 )}
//               </Button>
//               <ToastContainer
//                 position="bottom-left"
//                 autoClose={4000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick={false}
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//               />
//             </Form>
//             <ContactInfo />
//           </FlexWrapper>
//           <Man />
//         </ContactsWrapper>

//         <ContactInfoWrapper>
//           <ContactInfo />
//           <Man />
//         </ContactInfoWrapper>
//       </Container>
//     </StyledContacts>
//   );
// };

// const StyledContacts = styled.section`
//   padding-block: 80px;
//   @media ${({ theme }) => theme.media.tablet} {
//     padding-block: 60px;
//   }
//   @media ${({ theme }) => theme.media.mobile} {
//     padding: 30px 0 50px;
//   }
// `;

// const Form = styled.form`
//   width: min(100%, 500px);
//   display: flex;
//   flex-direction: column;
//   gap: 30px;
//   button {
//     align-self: center;
//   }

//   @media ${({ theme }) => theme.media.tablet} {
//     margin-inline: auto;
//   }
//   @media ${({ theme }) => theme.media.mobile} {
//     gap: 20px;
//   }
// `;

// const ContactsWrapper = styled.div`
//   margin-inline: auto;
//   width: min(100%, 1100px);
//   display: flex;
//   flex-direction: column;
//   padding: 50px 80px;
//   background-color: #fff;
//   border-radius: 50px;
//   gap: 40px;

//   position: relative;

//   @media ${({ theme }) => theme.media.laptop} {
//     padding: 50px;
//   }

//   @media ${({ theme }) => theme.media.tablet} {
//     ${StyledContactInfo} {
//       display: none;
//     }
//     ${StyledMan} {
//       opacity: 0;
//       pointer-events: none;
//     }
//   }
//   @media ${({ theme }) => theme.media.mobile} {
//     padding: 30px;
//   }
// `;

// const ContactInfoWrapper = styled.div`
//   background-color: ${({ theme }) => theme.colors.thirdBg};
//   background-color: #fff;
//   border-radius: 50px;
//   padding: 50px;
//   margin-top: 20px;
//   position: relative;

//   @media ${({ theme }) => theme.media.desktopLaptop} {
//     display: none;
//   }

//   @media ${({ theme }) => theme.media.tablet} {
//     display: block;
//     ${StyledMan} {
//       bottom: -85px;
//       right: 39px;
//       width: 160px;
//     }
//   }

//   @media ${({ theme }) => theme.media.mobile} {
//     padding: 30px;
//   }

//   @media (max-width: 510px) {
//     padding: 30px 0 180px 30px;
//     ${StyledMan} {
//       bottom: -85px;
//       right: 100px;
//       width: 160px;
//     }
//   }
// `;

// const FormTitle = styled.h3`
//   color: ${({ theme }) => theme.colors.accentColor};
//   font-size: ${({ theme }) => theme.fonts.contactsTitle};
//   font-weight: bold;
//   @media ${({ theme }) => theme.media.tablet} {
//     text-align: center;
//   }
// `;

// const baseTextStyles = `
//   font-weight: 400;
//   font-size: 14px;
//   color: #000;
//   &::placeholder {
//     color: #CCCCCC;
//   }
// `;

// const TextArea = styled.textarea`
//   ${baseTextStyles}
//   border: 2px solid ${({ theme }) => theme.colors.thirdFontColor};
//   padding: 10px;
//   resize: vertical;
// `;
// const Button = styled.button`
//   border-radius: 10px;
//   height: 40px;
//   width: 170px;
//   background-color: ${({ theme }) => theme.colors.accentColor};
//   font-size: 14px;
//   letter-spacing: 0.07em;
//   text-transform: uppercase;
//   color: #fff;
//   cursor: pointer;
//   transition: 0.2s ease-in-out;
//   margin-top: 10px;
//   position: relative;
//   &:hover {
//     transition: transform 0.3s;
//     transform: translateY(-4px);
//   }

//   &:disabled {
//     cursor: not-allowed;
//     opacity: 0.7;
//   }

//   @media ${({ theme }) => theme.media.mobile} {
//     width: 140px;
//     margin-top: 0;
//   }
// `;

// const Loader = styled.span`
//   width: 20px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   display: inline-block;
//   border-top: 2px solid #fff;
//   border-right: 2px solid transparent;
//   box-sizing: border-box;
//   animation: rotation 1s linear infinite;

//   position: absolute;
//   top: 50%;
//   right: 12px;

//   @media ${({ theme }) => theme.media.mobile} {
//     width: 17px;
//     right: 7px;
//   }

//   @keyframes rotation {
//     0% {
//       transform: translateY(-50%) rotate(0deg);
//     }
//     100% {
//       transform: translateY(-50%) rotate(360deg);
//     }
//   }
// `;

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
import {
  ContactInfo,
  StyledContactInfo,
} from "../../../components/contactInfo/ContactInfo";

export const Contacts = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [isResetForm, setIsResetForm] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [isMessageTouched, setIsMessageTouched] = useState(false);
  const [showSubmitHints, setShowSubmitHints] = useState(false);
  const [formErrors, setFormErrors] = useState({
    userName: false,
    phone: false,
    email: false,
    message: false,
  });

  const form = useRef<HTMLFormElement>(null);
  const trimmedMessage = messageValue.trim();
  const isMessageInvalid =
    trimmedMessage.length === 0 || trimmedMessage.length < 30;

  const clearForcedHints = () => {
    setShowSubmitHints(false);
  };

  const validateForm = (): boolean => {
    const formData = new FormData(form.current!);
    const userName = (formData.get("user_name") as string)?.trim() || "";
    const phone = (formData.get("phone_number") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const message = messageValue.trim();

    const lettersPattern = /^[a-zA-Zа-яА-ЯёЁ ]*$/;
    const phonePattern = /^[0-9]*$/;
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errors = {
      userName:
        userName.length === 0 ||
        userName.length < 3 ||
        !lettersPattern.test(userName),
      phone: phone.length === 0 || !phonePattern.test(phone),
      email: email.length === 0 || !emailRegex.test(email),
      message: message.length < 30,
    };

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    if (!validateForm()) {
      setShowSubmitHints(true);
      // toast.error("Please fill in all fields correctly");
      return;
    }

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
      setMessageValue("");
      setIsMessageFocused(false);
      setIsMessageTouched(false);
      setShowSubmitHints(false);
      setFormErrors({
        userName: false,
        phone: false,
        email: false,
        message: false,
      });
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
            <Form noValidate ref={form} onSubmit={handleSubmit}>
              <AnimateField
                type="text"
                placeholder="Your Name"
                name="user_name"
                maxlength={20}
                isResetForm={isResetForm}
                withValidation={true}
                validationType="letters"
                forceShowError={formErrors.userName}
                forceShowHint={showSubmitHints && formErrors.userName}
                onFieldFocus={clearForcedHints}
              />
              <AnimateField
                type="text"
                // pattern="[0-9]{9,}"
                placeholder="Phone Number"
                name="phone_number"
                title="Please enter a valid phone number (at least 9 digits)"
                maxlength={12}
                isResetForm={isResetForm}
                withValidation={true}
                validationType="phone"
                forceShowError={formErrors.phone}
                forceShowHint={showSubmitHints && formErrors.phone}
                onFieldFocus={clearForcedHints}
              />
              <AnimateField
                type="email"
                placeholder="Your email"
                name="email"
                isResetForm={isResetForm}
                withValidation={true}
                validationType="email"
                forceShowError={formErrors.email}
                forceShowHint={showSubmitHints && formErrors.email}
                onFieldFocus={clearForcedHints}
              />
              <TextAreaWrapper
                $hasError={
                  (formErrors.message && isMessageInvalid) ||
                  (isMessageFocused && isMessageTouched && isMessageInvalid)
                }
              >
                <TextArea
                  rows={7}
                  // minLength={30}
                  maxLength={500}
                  placeholder="Your message"
                  name="message"
                  value={messageValue}
                  onChange={(e) => {
                    setMessageValue(e.target.value);
                    setIsMessageTouched(true);
                  }}
                  onFocus={() => {
                    clearForcedHints();
                    setIsMessageFocused(true);
                  }}
                  onBlur={() => setIsMessageFocused(false)}
                  $hasError={
                    (formErrors.message && isMessageInvalid) ||
                    (isMessageFocused && isMessageTouched && isMessageInvalid)
                  }
                ></TextArea>
                {((showSubmitHints &&
                  formErrors.message &&
                  !isMessageFocused) ||
                  isMessageFocused) &&
                  trimmedMessage.length === 0 && (
                    <TextAreaHint>This field is required</TextAreaHint>
                  )}
                {((showSubmitHints &&
                  formErrors.message &&
                  !isMessageFocused) ||
                  isMessageFocused) &&
                  trimmedMessage.length > 0 &&
                  trimmedMessage.length < 30 && (
                    <TextAreaHint>
                      Please type at least 30 characters (
                      {trimmedMessage.length}
                      /30)
                    </TextAreaHint>
                  )}
              </TextAreaWrapper>
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
    /* gap: 20px; */
    gap: 25px;
  }
`;

const TextAreaWrapper = styled.div<{ $hasError?: boolean }>`
  position: relative;
  width: 100%;
  padding-bottom: 30px;
  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 5px;
  }
`;

const TextAreaHint = styled.p`
  font-size: 14px;
  position: absolute;
  bottom: 13px;
  left: 0;
  color: rgba(220, 146, 146, 0.592);
  margin: 0;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
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
      opacity: 0;
      pointer-events: none;
    }
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding: 30px;
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

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    ${StyledMan} {
      bottom: -85px;
      right: 39px;
      width: 160px;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 30px;
  }

  @media (max-width: 510px) {
    padding: 30px 0 180px 30px;
    ${StyledMan} {
      bottom: -85px;
      right: 100px;
      width: 160px;
    }
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

const TextArea = styled.textarea<{ $hasError?: boolean }>`
  ${baseTextStyles}
  border: 2px solid ${({ theme, $hasError }) =>
    $hasError ? "rgba(220, 146, 146, 0.585)" : theme.colors.thirdFontColor};
  padding: 10px;
  resize: vertical;
  width: 100%;
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
