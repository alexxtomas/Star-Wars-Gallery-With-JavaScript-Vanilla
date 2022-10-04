// import Characters from './components/characters/Characters'
import Characters from './components/characters/Characters'
import Filter from './components/filter/Filter'
import Header from './components/header/Header'
import Planets from './components/planets/Planets'
import charactersService from './services/charactersService'
import './styles.css'

const { PlanetsHTML, planets } = Planets

document.body.addEventListener('click', ({ path }) => {
  const clickedPlanet = planets.find(({ name }) => name === path[1].children[1]?.outerText)
  if (typeof clickedPlanet !== 'undefined') {
    const { id } = clickedPlanet
    const existentSearchContainer = document.querySelector('.search-container')
    const existentCharacters = document.querySelectorAll('.character-figure')
    if (existentSearchContainer !== null || existentCharacters.length !== 0) {
      existentSearchContainer.remove()
      existentCharacters.forEach(character => character.remove())
    }
    const planetsContainer = document.querySelector('.planets-container')
    planetsContainer.insertAdjacentHTML('afterend', Filter(clickedPlanet))

    charactersService.getCharactersByPlanetId(id)
      .then(characters => {
        const charactersContainer = document.querySelector('.characters-container')
        characters.forEach(({ name, avatar }) => {
          const htmlElement = `
          <figure class="character-figure">
              <img class="character-image" src="${avatar}" alt="${name} image">
              <figcaption class="character-figcaption">${name}</figcaption>
          </figure>
          `

          charactersContainer.innerHTML += htmlElement
        })
        const filterInput = document.querySelector('#filter-input')
        filterInput.addEventListener('input', ({ target }) => {
          const notDuplicateCharacters = document.querySelectorAll('.character-figure')
          if (notDuplicateCharacters.length !== 0) {
            notDuplicateCharacters.forEach(character => character.remove())
          }
          const { value: filterValue } = target
          const charactersToShow = characters.filter(({ name }) => name.toUpperCase().includes(filterValue.toUpperCase()))
          charactersToShow.forEach(({ name, avatar }) => {
            const htmlElement = `
            <figure class="character-figure">
                <img class="character-image" src="${avatar}" alt="${name} image">
                <figcaption class="character-figcaption">${name}</figcaption>
            </figure>
            `

            charactersContainer.innerHTML += htmlElement
          })
          console.log(charactersToShow)
        })
      })
  }
})

document.querySelector('#app').innerHTML = `
  ${Header}
  ${PlanetsHTML}
  ${Characters}
`
