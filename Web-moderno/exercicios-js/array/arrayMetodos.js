const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // último elemento é removido
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no final da lista
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no começo da lista
console.log(pilotos)

// Splice pode adicionar e remover elementos
// Adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Removendo
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)