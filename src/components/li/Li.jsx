
import { StyledLi, StyledCircle, StyledDiv, StyledNavLink, StyledContainer  } from "./styles"

const Li = ({text, path, color, handleClick}) => {
    return <StyledLi>
        <StyledNavLink to={path} color={color} onClick={()=> handleClick(false)}>
            <StyledContainer>
            <StyledCircle></StyledCircle>
            <StyledDiv>{text}</StyledDiv>
            </StyledContainer>
            <img src="/images/icon-chevron.svg" alt="" />
        </StyledNavLink>
    </StyledLi>
}

export default Li