import { StyledLi, StyledCircle, StyledDiv } from "./styles"

const Li = ({text}) => {
    return <StyledLi>
        <StyledDiv>
            <StyledCircle></StyledCircle>
            <a href="">{text}</a>
        </StyledDiv>
        <img src="/images/icon-chevron.svg" alt="" />
    </StyledLi>
}

export default Li