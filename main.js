// import Characters from './components/characters/Characters'
import Characters from './components/characters/Characters'
import Header from './components/header/Header'
import Planets from './components/planets/Planets'
import './styles.css'
console.log(window.screen.width)
console.log(window.screen.height)
const { PlanetsHTML } = Planets
const { CharactersContainer, appendCharacters } = Characters

appendCharacters()

document.querySelector('#app').innerHTML = `
  ${Header}
  ${PlanetsHTML}
  ${CharactersContainer}
`
