import Header from './components/header/Header'
import Planets from './components/planets/Planets'
import './styles.css'

document.querySelector('#app').innerHTML = `
  ${Header}
  ${Planets}
`

