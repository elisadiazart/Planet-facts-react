import styled from "styled-components";

const StyledH1 = styled.h1`
    text-transform: uppercase;
    font-family: 'Antonio', sans-serif;
    font-weight: 600;
    font-size: 2rem;

`

const StyledDiv= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
`

const StyledUl = styled.ul`
    margin: 1rem 4rem;
    height: calc(100vh - 73.5px - 2rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
`




export {StyledH1, StyledDiv, StyledUl}