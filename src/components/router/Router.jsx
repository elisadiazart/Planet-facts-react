import { Route, Routes } from "react-router-dom"
import { PLANETS } from "../../constants/data"
import PlanetPage from "../../pages/planet"

const Router = () => {
    return(
        <Routes>
            {PLANETS.map( planet => (
                    <Route key= {planet.id} path={planet.path} element={<PlanetPage planet={planet.name}/>}/>
                ))}
        </Routes>
    )
}


export default Router