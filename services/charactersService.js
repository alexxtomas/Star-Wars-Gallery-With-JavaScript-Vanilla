const getCharactersByPlanetId = id => {
  return fetch(`http://localhost:3000/characters?idPlanet=${id}`)
    .then(res => res.json())
    .then(json => json)
    .catch(e => console.log(e))
}

export default { getCharactersByPlanetId }
