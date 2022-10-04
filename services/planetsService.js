
const getAllPlanets = () => {
  return fetch('http://localhost:3000/planets')
    .then(res => res.json())
    .then(json => json)
    .catch(e => console.error(e))
}

export default { getAllPlanets }
