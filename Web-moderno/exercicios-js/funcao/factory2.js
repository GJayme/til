function criarProduto(nome, valor) {
  return {
    nome,
    valor,
    desconto: 5
  }
}

console.log(criarProduto('Livia', 10));