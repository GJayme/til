const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45}',
  '{ "nome": "Caderno", "preco": 13.95}',
  '{ "nome": "Kit de Lapis", "preco": 39.99}',
  '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

// Método que eu fiz:
let arrayPreco = []

for (let i in carrinho) {
  const transfObjeto = JSON.parse(carrinho[i])
  arrayPreco.push(transfObjeto.preco)
}

console.log(arrayPreco)

// Método da aula:
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)