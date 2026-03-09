import styled from "styled-components"

export const TickerTape = () => {
  return (
    <StyledTickerTape>
        <span>PROBLEM SOLVING</span>
        <span>&&</span>
        <span>CEATIVE THINKIG</span>
        <span>&&</span>
        <span>DEEP EXPERTISE</span>
        <span>&&</span>
        <span>TEAM WORKER</span>
    </StyledTickerTape>
  )
}

const StyledTickerTape = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
font-size: 32px;
color: #fff;
background-color: #6666e0;
padding-block: 12px;
`
