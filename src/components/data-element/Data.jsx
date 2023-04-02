import { StyledTitle, StyledData, StyledDiv } from "./styles"

const Data = ({title, data}) => {
    return <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledData>{data}</StyledData>
    </StyledDiv>
}


export default Data