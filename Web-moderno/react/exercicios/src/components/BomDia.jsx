import React from 'react'

// Encapsulamento das tag usando Fragment
export default props =>
  <>
    <h1>Bom dia {props.nome}</h1>
    <h2>Até breve</h2>
  </>

// Usando ARRAY

// export default props => [
//   <h1 key='h1'>Bom dia {props.nome}</h1>,
//   <h2 key='h2'>Até breve</h2>
// ]


// Encapsulamento das tag usando DIV

// export default props =>
//   <div>
//     <h1>Bom dia {props.nome}</h1>
//     <h2>Até breve</h2>
//   </div>
