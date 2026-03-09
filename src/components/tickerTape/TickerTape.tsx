import styled from "styled-components";

export const TickerTape = (props: { listItems: Array<string> }) => {
  return (
    <StyledTickerTape>
      {props.listItems.map((item) => (
        <span key={crypto.randomUUID()}>{item}</span>
      ))}
    </StyledTickerTape>
  );
};

const StyledTickerTape = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 32px;
  color: #fff;
  background-color: #6666e0;
  padding-block: 12px;
`;
