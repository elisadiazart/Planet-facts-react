import styled from "styled-components";
import { COLORS } from "../../constants/colors";

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
    padding: 1.5rem 2rem 1.5rem 2rem;
    border-bottom: 1px solid ${COLORS.grey};
`

const StyledUl = styled.ul`
    padding: 1rem 4rem;
    height: calc(100vh - 73.5px - 2rem);
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    transform: translate(${({ translate }) => translate});
    transition: transform .3s;
    position: absolute;
    top: 90px;
    z-index: 1;
    background-color: ${COLORS.bgcolor};
`

const StyledNav = styled.nav`
    
`



export {StyledH1, StyledDiv, StyledUl, StyledNav}