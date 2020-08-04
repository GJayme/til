// OPERADOR ... rest(juntar)/ spread(espalhar)
// usar rest com parâmetro de função para

// usar spread com objeto

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usando spread com array 
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)