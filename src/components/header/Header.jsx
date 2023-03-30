import { v4 } from "uuid"
import { PLANETS } from "../../constants/data"
import Li from "../li/Li"
import { StyledH1, StyledDiv, StyledUl, StyledNav} from "./styles"
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    return <header>
        <StyledNav>
            <StyledDiv>
               <StyledH1>The planets</StyledH1> 
               <img src="/images/icon-hamburger.svg" alt="menu" onClick={() => setMenu(open, setOpen)} />
            </StyledDiv>
            <StyledUl translate= {open ? '0' : '100vw'}>
                {PLANETS.map( planet => (
                    <Li color={planet.color} path={planet.path} key= {v4()} text = {planet.name} handleClick={setOpen}/>
                ))}
            </StyledUl>
        </StyledNav>
    </header>
}

const setMenu = (open, setOpen) => {
	setOpen(!open);
};

export default Header