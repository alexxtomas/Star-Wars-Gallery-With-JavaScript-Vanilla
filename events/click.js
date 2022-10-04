import Planets from '../components/planets/Planets'
import input from './input'

const { planets } = Planets
const onPlanet = (Filter) => {
  document.body.addEventListener('click', ({ path }) => {
    const clickedPlanet = planets.find(({ name }) => name === path[1].children[1]?.outerText)
    if (typeof clickedPlanet !== 'undefined') {
      const { id } = clickedPlanet
      const existentSearchContainer = document.querySelector('.search-container')
      const existentCharactersContainer = document.querySelector('.characters-container')

      if (existentSearchContainer !== null || existentCharactersContainer !== null) {
        existentCharactersContainer?.remove()
        existentSearchContainer.remove()
      }

      document.body.innerHTML += Filter(clickedPlanet)

      input.onFilter(id)
    }
  })
}

export default { onPlanet }
