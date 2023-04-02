import styled from "styled-components";


const StyledTitle = styled.h3`
    text-transform: uppercase;
    opacity: 0.5;
    font-weight: 400;
    font-size: .8rem;
    font-family: 'League Spartan', sans-serif;
    letter-spacing: 2.5px;
    transform: translateY(2px);
`

const StyledData = styled.p`
    text-transform: uppercase;
    font-family: 'Antonio', sans-serif;
    font-size: 1.4rem;
`


const StyledDiv = styled.div`
    margin: 0 2rem;
    border: 1px solid #4B4B4B;
    padding: .8rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

`


export {StyledTitle, StyledData, StyledDiv}