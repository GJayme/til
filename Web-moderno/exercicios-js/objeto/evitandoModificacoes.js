// Object.preventExtensions -> Não deixa acrescentar nenhuma característica a mais no objeto, porém permite apagar e modificar os já existentes.
const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.steal -> não permite apagar e nem adicionar, porém consegue modificar os que ja existem
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa)

//Object.freeze = Selado + valores constantes