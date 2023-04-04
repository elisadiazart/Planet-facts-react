
import { StyledLi, StyledCircle, StyledDiv, StyledNavLink, StyledContainer,StyledArrow  } from "./styles"

const Li = ({text, path, color, handleClick}) => {
    return <StyledLi>
        <StyledNavLink to={path} color={color} onClick={()=> handleClick(false)}>
            <StyledContainer>
            <StyledCircle></StyledCircle>
            <StyledDiv>{text}</StyledDiv>
            </StyledContainer>
            <StyledArrow src="/images/icon-chevron.svg" alt="" />
        </StyledNavLink>
    </StyledLi>
}

export default Li