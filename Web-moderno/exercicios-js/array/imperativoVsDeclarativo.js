const alunos = [
  { nome: 'João', nota: 7.0 },
  { nome: 'Maria', nota: 9.2 }
];
/* IMPERATIVO
  Você diz passo a passo com detalhes o que você deve fazer;
  Foca em COMO DEVE SER FEITO;
  É uma coisa só e faz tudo ao mesmo tempo;
  Tem MENOS reuso;
*/
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length);

/* DECLARATIVO
  Você pede o que deve ser feito e internamente ele faz;
  Foco em O QUE DEVE SER FEITO;
  É uma abordagem mais interessante;
  Tem MAIS reuso;
*/

const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// select código, nome, email from clientes where ativo = 1