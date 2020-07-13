/*
  02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus
  lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais.
  Escaleno: Todos os lados são diferentes.
  Crie uma função que recebe os comprimentos dos três lados de um triângulo e
  retorne sua classificação quanto ao tamanho de seus lados.
  (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
  triângulo).
*/

const triangulo = (ladoA, ladoB, ladoC) => {
  if ((ladoA === ladoB) && (ladoA === ladoC)) {
    console.log(`Dado os lados ${ladoA, ladoB, ladoC}, temos um triângulo Equilátero`);
  }
  else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
    console.log(`Dado os lados ${ladoA, ladoB, ladoC}, temos um triângulo Isósceles`);
  }
  else {
    console.log(`Dado os lados ${ladoA, ladoB, ladoC}, temos um triângulo Escaleno`);
  }
}

triangulo(3, 2, 1);