// ES8: Object.values -> retorna os valores / Object.entries -> retorna um array com chave/valor
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// MELHORIAS NA NOTAÇÃO LITERAL DE OBJETO:
const nome = 'Carla'
const pessoa = {
  nome,
  ola() {
    return 'Olá pessoa!'
  }
}

console.log(pessoa.nome, pessoa.ola())

// CLASSE ADICIONADA EM JS:
class Animal { }
class Cachorro extends Animal {
  falar() {
    return 'Au Au'
  }
}

console.log(new Cachorro().falar())