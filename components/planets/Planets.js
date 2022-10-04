import planetsService from '../../services/planetsService'
import './styles.css'

let Planets = ``

const planets = await planetsService.getAllPlanets()
planets.map(({image, name}) => {
    Planets += `
        <figure class="planet-figure">
            <img class="planet-image" src="${image}" alt="${name} image">
            <figcaption class="planet-figcaption">${name}</figcaption>
        </figure>
        `
    })

Planets = `
    <div class="planets-container">
        ${Planets}
    </div>
`


export default  Planets

