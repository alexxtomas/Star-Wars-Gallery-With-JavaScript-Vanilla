import charactersServices from '../../services/charactersService'
import './styles.css'
const Characters = async (id, filterValue) => {
  const characters = await charactersServices.getCharactersByPlanetId(id)
  let charactersHTML = ''
  const filtredCharacters = characters.filter(({ name }) => name.toUpperCase().includes(filterValue.toUpperCase()))
  filtredCharacters.forEach(({ name, avatar }) => {
    charactersHTML += `
    <figure class="character-figure">
        <img class="character-image" src="${avatar}" alt="${name} image">
        <figcaption class="character-figcaption">${name}</figcaption>
    </figure>
`
  })

  charactersHTML = `
    <div class="characters-container">
        ${charactersHTML}
    </div>
  `

  return charactersHTML
}
export default Characters
