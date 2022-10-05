import planetsService from '../../services/planetsService'
import './styles.css'

let PlanetsHTML = ''
const planets = await planetsService.getAllPlanets()

planets.forEach(({ image, name }) => {
  console.log(image)
  PlanetsHTML += `
        <figure class="planet-figure">
            <img class="planet-image" src="${image}" alt="${name} image">
            <figcaption class="planet-figcaption">${name}</figcaption>
        </figure>
        `
})

PlanetsHTML = `
    <div class="planets-container">
        ${PlanetsHTML}
    </div>
`

export default { PlanetsHTML, planets }
