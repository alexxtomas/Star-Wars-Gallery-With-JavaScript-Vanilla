import Characters from '../components/characters/Characters'

const onFilter = (id) => {
  const filterInput = document.querySelector('#filter-input')

  filterInput.addEventListener('input', ({ target }) => {
    const { value: filterValue } = target
    Characters(id, filterValue).then(characters => {
      const existentCharactersContainer = document.querySelector('.characters-container')
      if (existentCharactersContainer !== null) existentCharactersContainer.remove()
      document.body.innerHTML += characters
    })
  })
}

export default { onFilter }
