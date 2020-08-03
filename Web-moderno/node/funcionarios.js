const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = pessoas => pessoas.pais === 'China';
const mulheres = pessoas => pessoas.genero === 'F';
const menorSalario = (pessoa, pessoaAtual) => {
  return pessoa.salario < pessoaAtual.salario ? pessoa : pessoaAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data;

  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

  console.log(func)
})
