import styled from "styled-components"
import { COLORS } from "../../constants/colors"

const StyledLi = styled.li`
    padding: 1rem;
    border-bottom: 1px solid ${COLORS.grey};
    font-weight: 600;
    font-family: 'League Spartan', sans-serif;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${COLORS.grey};
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: space-between;
`

const StyledCircle = styled.div`
     width: 25px;
     height: 25px;
     background-color: ${COLORS.grey};
     border-radius: 50%;
     margin-right: 1rem;
`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`

export {StyledLi, StyledCircle, StyledDiv}