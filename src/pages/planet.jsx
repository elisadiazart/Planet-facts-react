
import Data from "../components/data-element/Data"
import { INFO } from "../constants/data"
import { StyledUl, StyledA, StyledLi, StyledPlanetImage, StyledPlanetContainer, StyledH1, StyledText, StyledSource, StyledSourceLink, StyledDataContainer } from "./styles"

const PlanetPage = ({planet}) => {
    return <main>
        <nav>
            <StyledUl>
                <StyledLi>
                    <StyledA href="#"> overview</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="#">Structure</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="#"> Surface</StyledA>
                </StyledLi>
            </StyledUl>
        </nav>
        <StyledPlanetContainer>
            <StyledPlanetImage src={`/images/planet-${planet}.svg`} alt="" />
        </StyledPlanetContainer>
    <StyledH1>{planet}</StyledH1>
    <StyledText>{INFO[planet].text}</StyledText>
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