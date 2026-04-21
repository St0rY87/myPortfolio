// import styled from "styled-components";
// import { useElasticLine } from "./ElasticInput";

// export const AnimateField = (props: {
//   type: string;
//   placeholder: string;
//   name: string;
//   pattern?: string;
//   title?: string;
//   maxlength?: number;
//   minlength?: number;
//   isResetForm?: boolean;
// }) => {
//   const { inputRef, lineRef, placeholderRef, containerRef } = useElasticLine(
//     props.isResetForm
//   );


//   return (
//     <InputWrapper ref={containerRef}>
//       <Placeholder ref={placeholderRef}>{props.placeholder}</Placeholder>
//       <Input
//         required
//         ref={inputRef}
//         type={props.type}
//         autoComplete="off"
//         name={props.name}
//         pattern={props.pattern}
//         title={props.title}
//         maxLength={props.maxlength}
//       />
//       <LineSvg
//         width="100%"
//         height="2"
//         viewBox="0 0 300 2"
//         preserveAspectRatio="none"
//         fill="none"
//       >
//         <ElasticPath
//           ref={lineRef}
//           d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
//           stroke="#D2D2D2"
//           // stroke="rgba(220, 146, 146, 0.585)"
//           strokeWidth="2"
//         />
//       </LineSvg>
//     </InputWrapper>
//   );
// };

// const InputWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   svg {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     overflow: visible;
//   }
// `;

// const Placeholder = styled.p`
//   padding: 10px 0 6px;
//   font-weight: 400;
//   font-size: 14px;
//   color: #cccccc;
//   border: none;
//   position: relative;
//   z-index: 1;
//   pointer-events: none;
//   transform-origin: left;
//   margin: 0;

//   @media ${({theme}) => theme.media.mobile} {
//     font-size: 12px;
//   }
// `;

// const Input = styled.input`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   border: none;
//   outline: none;
//   font-weight: 400;
//   font-size: 14px;
//   color: #000;
//   background: transparent;
//   &:focus {
//     outline: none;
//   }
// `;

// const LineSvg = styled.svg`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 2px;
//   display: block;
// `;

// const ElasticPath = styled.path``;

import styled from "styled-components";
import { useElasticLine } from "./ElasticInput";
import { useEffect, useState } from "react";

export const AnimateField = (props: {
  type: string;
  placeholder: string;
  name: string;
  pattern?: string;
  title?: string;
  maxlength?: number;
  isResetForm?: boolean;
  withValidation?: boolean;
  validationType?: "letters" | "phone" | "email";
  forceShowError?: boolean;
  forceShowHint?: boolean;
  onFieldFocus?: () => void;
}) => {
  const { inputRef, lineRef, placeholderRef, containerRef } = useElasticLine(
    props.isResetForm,
  );

  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showMaxLengthMessage, setShowMaxLengthMessage] = useState(false);
  const [error, setError] = useState("");
  const [maxLengthTimerId, setMaxLengthTimerId] = useState<number | null>(null);
  const [isTouched, setIsTouched] = useState(false);
  const lettersPattern = /^[a-zA-Zа-яА-ЯёЁ ]*$/;
  const phonePattern = /^[0-9]*$/;
  const emailPattern = /^[a-zA-Z0-9._+-]*@?[a-zA-Z0-9.-]*\.?[a-zA-Z]*$/;

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isControlKey = (key: string) => {
    return (
      key === "Backspace" ||
      key === "Delete" ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "ArrowUp" ||
      key === "ArrowDown" ||
      key === "Tab" ||
      key === "Enter" ||
      key === "Escape" ||
      key === "Home" ||
      key === "End" ||
      key === "PageUp" ||
      key === "PageDown" ||
      key.length > 1
    );
  };

  const hasValidationError =
    (props.forceShowError &&
      props.validationType === "letters" &&
      (value.trim().length === 0 ||
        value.trim().length < 3 ||
        !lettersPattern.test(value))) ||
    (props.forceShowError &&
      props.validationType === "phone" &&
      (value.trim().length === 0 || !phonePattern.test(value))) ||
    (props.forceShowError &&
      props.validationType === "email" &&
      (value.trim().length === 0 || !isValidEmail(value))) ||
    (props.withValidation &&
      isTouched &&
      (!!error ||
        value.trim().length === 0 ||
        showMaxLengthMessage ||
        (props.validationType !== "phone" &&
          props.validationType !== "email" &&
          value.trim().length > 0 &&
          value.trim().length < 3))) ||
    (props.withValidation &&
      isFocused &&
      (value.trim().length === 0 ||
        !!error ||
        showMaxLengthMessage ||
        (props.validationType !== "phone" &&
          props.validationType !== "email" &&
          value.trim().length > 0 &&
          value.trim().length < 3))) ||
    false;

  useEffect(() => {
    if (!error || props.validationType === "email") return;

    const timer = window.setTimeout(() => {
      setError("");
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [error, props.validationType]);

  useEffect(() => {
    if (props.isResetForm) {
      setValue("");
      setIsTouched(false);
      setError("");
      setShowMaxLengthMessage(false);
      if (maxLengthTimerId) {
        window.clearTimeout(maxLengthTimerId);
        setMaxLengthTimerId(null);
      }
    }
  }, [props.isResetForm, maxLengthTimerId]);

  return (
    <InputWrapper ref={containerRef}>
      <Placeholder ref={placeholderRef}>{props.placeholder}</Placeholder>
      <Input
        ref={inputRef}
        type={props.type}
        autoComplete="off"
        name={props.name}
        pattern={props.pattern}
        title={props.title}
        maxLength={props.maxlength}
        value={value}
        onChange={(e) => {
          const nextValue = e.target.value;

          if (!props.withValidation) {
            setValue(nextValue);
            return;
          }

          setIsTouched(true);

          if (props.validationType === "phone") {
            if (phonePattern.test(nextValue)) {
              setValue(nextValue);
              setError("");

              if (props.maxlength && nextValue.length >= props.maxlength) {
                if (!maxLengthTimerId) {
                  setShowMaxLengthMessage(true);
                  const id = window.setTimeout(() => {
                    setShowMaxLengthMessage(false);
                    setMaxLengthTimerId(null);
                  }, 2000);
                  setMaxLengthTimerId(id);
                }
              } else {
                if (maxLengthTimerId) {
                  window.clearTimeout(maxLengthTimerId);
                  setMaxLengthTimerId(null);
                }
                setShowMaxLengthMessage(false);
              }
            } else {
              setError("Only digits are allowed");
            }
          } else if (props.validationType === "email") {
            if (emailPattern.test(nextValue)) {
              setValue(nextValue);
              if (nextValue.length > 0 && !isValidEmail(nextValue)) {
                setError("Please enter a valid email");
              } else {
                setError("");
              }
            } else {
              setError("Invalid email format");
            }
          } else {
            if (lettersPattern.test(nextValue)) {
              setValue(nextValue);
              setError("");

              if (props.maxlength && nextValue.length >= props.maxlength) {
                if (!maxLengthTimerId) {
                  setShowMaxLengthMessage(true);
                  const id = window.setTimeout(() => {
                    setShowMaxLengthMessage(false);
                    setMaxLengthTimerId(null);
                  }, 2000);
                  setMaxLengthTimerId(id);
                }
              } else {
                if (maxLengthTimerId) {
                  window.clearTimeout(maxLengthTimerId);
                  setMaxLengthTimerId(null);
                }
                setShowMaxLengthMessage(false);
              }
            } else {
              setError("Only latin and cyrillic letters are allowed");
            }
          }
        }}
        onKeyDown={(e) => {
          if (!props.withValidation) return;

          if (
            props.maxlength &&
            value.length === props.maxlength &&
            !isControlKey(e.key)
          ) {
            if (!maxLengthTimerId) {
              setShowMaxLengthMessage(true);
              const id = window.setTimeout(() => {
                setShowMaxLengthMessage(false);
                setMaxLengthTimerId(null);
              }, 2000);
              setMaxLengthTimerId(id);
            }
          }
        }}
        onFocus={() => {
          props.onFieldFocus?.();
          setIsFocused(true);
        }}
        onBlur={() => {
          if (props.withValidation) {
            setIsTouched(true);
          }
          setIsFocused(false);
        }}
      />
      <LineSvg
        width="100%"
        height="2"
        viewBox="0 0 300 2"
        preserveAspectRatio="none"
        fill="none"
      >
        <ElasticPath
          ref={lineRef}
          d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
          strokeWidth="2"
          $hasError={hasValidationError}
        />
      </LineSvg>
      {(props.withValidation || props.forceShowHint) && isFocused && (
        <Hint>
          {error && error}
          {!error && value.trim().length === 0 && "This field is required"}
          {!error &&
            showMaxLengthMessage &&
            `
            Maximum length of ${props.maxlength} characters reached
          `}

          {!error &&
            !showMaxLengthMessage &&
            props.validationType !== "phone" &&
            props.validationType !== "email" &&
            value.trim().length > 0 &&
            value.trim().length < 3 &&
            "Please type at least 3 characters"}
        </Hint>
      )}
      {props.forceShowHint && !isFocused && (
        <Hint>
          {props.validationType === "letters" &&
            value.trim().length === 0 &&
            "This field is required"}
          {props.validationType === "letters" &&
            value.trim().length > 0 &&
            value.trim().length < 3 &&
            "Please type at least 3 characters"}
          {props.validationType === "letters" &&
            value.trim().length > 0 &&
            !lettersPattern.test(value) &&
            "Only letters are allowed"}
          {props.validationType === "phone" &&
            value.trim().length === 0 &&
            "This field is required"}
          {props.validationType === "phone" &&
            value.trim().length > 0 &&
            !phonePattern.test(value) &&
            "Only digits are allowed"}
          {props.validationType === "email" &&
            value.trim().length === 0 &&
            "This field is required"}
          {props.validationType === "email" &&
            value.trim().length > 0 &&
            !isValidEmail(value) &&
            "Please enter a valid email"}
        </Hint>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: visible;
  }
`;

const Placeholder = styled.p`
  padding: 10px 0 6px;
  font-weight: 400;
  font-size: 14px;
  color: #cccccc;
  border: none;
  position: relative;
  z-index: 1;
  pointer-events: none;
  transform-origin: left;
  margin: 0;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  color: #000;
  background: transparent;
  &:focus {
    outline: none;
  }
  @media ${({ theme }) => theme.media.mobile} {
    height: 25px;
    font-size: 12px;
  }
`;

const LineSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  display: block;
`;

const ElasticPath = styled.path<{ $hasError: boolean }>`
  stroke: ${(props) =>
    props.$hasError ? "rgba(220, 146, 146, 0.585)" : "#D2D2D2"};
`;

const Hint = styled.p`
  font-size: 14px;
  position: absolute;
  bottom: -20px;
  left: 0;
  color: rgba(220, 146, 146, 0.592);

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
    bottom: -17px;
  }

`;
