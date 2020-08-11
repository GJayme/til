import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite}  from './components/Multiplos'

ReactDOM.render(
  <div>
    <Multi.BoaTarde nome="Bia" />
    <BoaNoite nome="Ana" />
  </div>
  , document.getElementById('root'))

// Criando elemento com JQuery: $('<h1>').html('React 2')
// JSX é a um JS estendido com HTML
// JSX cria componentes (que usam HTML, comportamento e estilo) e os componente em conjunto monta a sua aplicação.