// import Characters from './components/characters/Characters'
import Filter from './components/filter/Filter'
import Header from './components/header/Header'
import Planets from './components/planets/Planets'
import click from './events/click'
import './styles.css'

const { PlanetsHTML } = Planets

click.onPlanet(Filter)

// input.onFilter(id)

// document.body.addEventListener('click', ({ path }) => {
//   const clickedPlanet = planets.find(({ name }) => name === path[1].children[1]?.outerText)
//   if (typeof clickedPlanet !== 'undefined') {
//     const { id } = clickedPlanet
//     const existentSearchContainer = document.querySelector('.search-container')
//     const existentCharactersContainer = document.querySelector('.characters-container')

//     if (existentSearchContainer !== null || existentCharactersContainer !== null) {
//       existentCharactersContainer?.remove()
//       existentSearchContainer.remove()
//     }

//     document.body.innerHTML += Filter(clickedPlanet)
//   }
// })

// const filterInput = document.querySelector('#filter-input')
// console.log(filterInput)
// // filterInput.addEventListener('change', evt => {
// //   console.log(evt.target.value)
// // })
// filterInput.addEventListener('input', ({ target }) => {
//   const { value: filterValue } = target
//   // console.log(filterValue)
//   Characters(id, filterValue).then(characters => {
//     if (existentCharactersContainer !== null) existentCharactersContainer.remove()
//     document.body.innerHTML += characters
//   })
// })

document.querySelector('#app').innerHTML = `
  ${Header}
  ${PlanetsHTML}
`
