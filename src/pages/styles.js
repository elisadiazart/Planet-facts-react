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
    opacity: ${({isActive})=>isActive ? '1' : '.5'}
    
`

const StyledLi= styled.li`
    padding: 1.6rem 2rem;
    background-color:  ${({isActive, color})=>isActive ? color : 'transparent'};
    
`

const StyledPlanetImage = styled.img`
    height: 150px;
    margin: auto;
    margin-bottom: 1rem;

`

const StyledPlanetContainer = styled.div`
    margin: 3rem .4rem;

`

const StyledH1 = styled.h1`
    font-family: 'Antonio', sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
`

const StyledText = styled.p`
    font-family: 'League Spartan', sans-serif;
    margin: 0 2rem;
    text-align: center;
    font-size: .9rem;
    line-height: 24px;
    font-weight: 300;
    margin-bottom: 2rem;
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

const StyledDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

`



export{ StyledUl, StyledA, StyledLi, StyledPlanetImage, StyledPlanetContainer, StyledH1, StyledText, StyledSource, StyledSourceLink, StyledDataContainer }