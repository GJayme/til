// Factory simples (funcao que retorna um objeto, ela fabrica uma instancia de um objeto)
function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())