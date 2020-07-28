const nums = [1, 2, 3, 4, 5]

// MAP é um For com propósito, ele transforma cada elemento para um novo array
// o MAP nao causa modificação no array original, ele cria um novo array


let resultado = nums.map(function (e) {
  return e * 2
})

console.log(nums, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let soma = nums.map(soma10)

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)