import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva" >
      <Filho nome="Pedro" />
      <Filho nome="Carla" />
      <Filho nome="Manoel" />
    </Pai>
  </div>
  , document.getElementById('root'))

// Criando elemento com JQuery: $('<h1>').html('React 2')
// JSX é a um JS estendido com HTML
// JSX cria componentes (que usam HTML, comportamento e estilo) e os componente em conjunto monta a sua aplicação.