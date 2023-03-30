import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${COLORS.grey};
    padding: 0 1rem;
`

const StyledA = styled.a`
    text-transform: uppercase;
    font-family: 'League Spartan', sans-serif;
    letter-spacing: 1.92857px;
    text-align: center;
    opacity: .5;
    
`

const StyledLi= styled.li`
    padding: 1.6rem 2rem;
`

const StyledPlanetImage = styled.img`
    width: 200px;
    margin: auto;
    margin-bottom: 2rem;

`

const StyledPlanetContainer = styled.div`
    margin: 4rem 1rem;

`

const StyledH1 = styled.h1`
    font-family: 'Antonio', sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.5rem;
`

const StyledText = styled.p`
    font-family: 'League Spartan', sans-serif;
    margin: 0 2rem;
    text-align: center;
    font-size: 1rem;
    line-height: 29px;
    font-weight: 300;
    margin-bottom: 3rem;
`

const StyledSource = styled.p`
    text-align: center;
    font-family: 'League Spartan', sans-serif;
    opacity: .5;
    font-weight: 300;
    font-size: 1.1rem;
    margin-bottom: 2rem;
`


const StyledSourceLink = styled.a`
    font-weight: 700;
    text-decoration: underline;
`

export{ StyledUl, StyledA, StyledLi, StyledPlanetImage, StyledPlanetContainer, StyledH1, StyledText, StyledSource, StyledSourceLink }