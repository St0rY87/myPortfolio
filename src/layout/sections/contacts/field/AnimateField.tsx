import styled from "styled-components";
import { useElasticLine } from "./ElasticInput";

export const AnimateField = (props: {
  type: string;
  placeholder: string;
  name: string;
  pattern?: string;
  title?: string;
  maxlength?: number;
  isResetForm?: boolean;
}) => {
  const { inputRef, lineRef, placeholderRef, containerRef } = useElasticLine(
    props.isResetForm
  );

  return (
    <InputWrapper ref={containerRef}>
      <Placeholder ref={placeholderRef}>{props.placeholder}</Placeholder>
      <Input
        required
        ref={inputRef}
        type={props.type}
        autoComplete="off"
        name={props.name}
        pattern={props.pattern}
        title={props.title}
        maxLength={props.maxlength}
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
          stroke="#D2D2D2"
          strokeWidth="2"
        />
      </LineSvg>
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

  @media ${({theme}) => theme.media.mobile} {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
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
`;

const LineSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  display: block;
`;

const ElasticPath = styled.path``;
