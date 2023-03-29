import { v4 } from "uuid"
import { PLANETS } from "../../constants/data"
import Li from "../li/Li"
import { StyledH1, StyledDiv, StyledUl} from "./styles"

const Header = () => {
    return <header>
        <nav>
            <StyledDiv>
               <StyledH1>The planets</StyledH1> 
               <img src="/images/icon-hamburger.svg" alt="" />
            </StyledDiv>
            <StyledUl>
                {PLANETS.map( planet => (
                    <Li key= {v4()} text = {planet}/>
                ))}
            </StyledUl>
        </nav>
    </header>
}

export default Header