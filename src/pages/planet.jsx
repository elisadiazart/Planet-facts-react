
import Data from "../components/data-element/Data"
import { INFO } from "../constants/data"
import { useState } from "react"
import { StyledUl, StyledA, StyledLi, StyledPlanetImage, StyledPlanetContainer, StyledH1, StyledText, StyledSource, StyledSourceLink, StyledDataContainer, StyledContainer, StyledTextContainer, StyledMainContainer, StyledMain } from "./styles"

const PlanetPage = ({planet}) => {
    const [tab, setValue] = useState('overview') 

    return <StyledMain>
        <StyledMainContainer>
        <nav>
            <StyledUl>
                <StyledLi isActive={tab==='overview'} color={INFO[planet].color}>
                    <StyledA isActive={tab==='overview'} href="#" onClick={()=>setValue('overview')} > overview</StyledA>
                </StyledLi>
                <StyledLi isActive={tab==='internal'} color={INFO[planet].color}>
                    <StyledA isActive={tab==='internal'} href="#" onClick={()=>setValue('internal')} >Structure</StyledA>
                </StyledLi>
                <StyledLi isActive={tab==='surface'} color={INFO[planet].color}>
                    <StyledA isActive={tab==='surface'} href="#" onClick={()=>setValue('surface')} > Surface</StyledA>
                </StyledLi>
            </StyledUl>
        </nav>
        <StyledContainer>
                <StyledPlanetContainer>
                    <StyledPlanetImage src={INFO[planet][tab].image} alt="" />
                </StyledPlanetContainer>
            <StyledTextContainer>
                <StyledH1>{planet}</StyledH1>
                <StyledText>{INFO[planet][tab].text}</StyledText>
                <StyledSource>Source: <StyledSourceLink href="">Wikipedia</StyledSourceLink></StyledSource>
            </StyledTextContainer>
        </StyledContainer>
        </StyledMainContainer>
    <StyledDataContainer>
        <Data title='ROTATION TIME' data={INFO[planet].rotationTime}/>
        <Data title='Revolution time' data={INFO[planet].revolutionTime}/>
        <Data title='Radius' data={INFO[planet].radius}/>
        <Data title='average temp.' data={INFO[planet].averageTemp}/>
    </StyledDataContainer>
    </StyledMain>
    
}

export default PlanetPage