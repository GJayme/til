import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './components/Saudacao'

ReactDOM.render(
  <div>
    <Saudacao tipo="Bom dia" nome="João" />
  </div>
  , document.getElementById('root'))

// Criando elemento com JQuery: $('<h1>').html('React 2')
// JSX é a um JS estendido com HTML
// JSX cria componentes (que usam HTML, comportamento e estilo) e os componente em conjunto monta a sua aplicação.