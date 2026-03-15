import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const TickerTape = (props: { listItems: Array<string> }) => {
  return (
    <StyledTickerTape>
      <WrapperWords>
        {props.listItems.map((item) => (
          <span key={crypto.randomUUID()}>{item}</span>
        ))}
      </WrapperWords>
    </StyledTickerTape>
  );
};

const StyledTickerTape = styled.div`
  font-size: 26px;
  color: #fff;
  /* background-color: #6666e0; */
  background-color: ${theme.colors.accentColor};
  padding-block: 12px;
  overflow: hidden;
  & span {
    text-transform: uppercase;
  }
`;

const WrapperWords = styled.div`
  min-width: max-content;
  display: flex;
  gap: 30px;
  flex-wrap: nowrap;
`;
