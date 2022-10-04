import './styles.css'

const Filter = clickedPlanet => `
  <div class="search-container">
    <h2 class="click-title">All Characters From ${clickedPlanet.name}</h2>
    <label for="filter-input">Filter By Name: <input type="text" id="filter-input" name="filter-input" maxlength="10"></label>
  </div>
   
`

export default Filter
