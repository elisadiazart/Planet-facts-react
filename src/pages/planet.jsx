
import Data from "../components/data-element/Data"
import { INFO } from "../constants/data"
import { useState } from "react"
import { StyledUl, StyledA, StyledLi, StyledPlanetImage, StyledPlanetContainer, StyledH1, StyledText, StyledSource, StyledSourceLink, StyledDataContainer } from "./styles"

const PlanetPage = ({planet}) => {
    const [tab, setValue] = useState('overview') 

    return <main>
        <nav>
            <StyledUl>
                <StyledLi>
                    <StyledA href="#" onClick={()=>setValue('overview')}> overview</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="#" onClick={()=>setValue('internal')}>Structure</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="#" onClick={()=>setValue('surface')}> Surface</StyledA>
                </StyledLi>
            </StyledUl>
        </nav>
        <StyledPlanetContainer>
            <StyledPlanetImage src={INFO[planet][tab].image} alt="" />
        </StyledPlanetContainer>
    <StyledH1>{planet}</StyledH1>
    <StyledText>{INFO[planet][tab].text}</StyledText>
    <StyledSource>Source: <StyledSourceLink href="">Wikipedia</StyledSourceLink></StyledSource>
    <StyledDataContainer>
        <Data title='ROTATION TIME' data={INFO[planet].rotationTime}/>
        <Data title='Revolution time' data={INFO[planet].revolutionTime}/>
        <Data title='Radius' data={INFO[planet].radius}/>
        <Data title='average temp.' data={INFO[planet].averageTemp}/>
    </StyledDataContainer>
    </main>
    
}

export default PlanetPage