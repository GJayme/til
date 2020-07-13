/*
  06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de
  juros e tempo de aplicação. A primeira função retornará o montante da aplicação
  financeira sob o regime de juros simples e a segunda retornará o valor da
  aplicação sob o regime de juros compostos.
*/

const aplicacaoJurosSimples = (capital, jurosMes, tempoMeses) => {
  console.log(`O retorn da aplicação a juros simples é de: ${(capital * (1 + jurosMes * tempoMeses)).toFixed(2)}`);
}

const aplicacaoJurosComposto = (capital, jurosMes, tempoMeses) => {
  console.log(`O retorn da aplicação a juros composto é de: ${(capital * (1 + jurosMes) ** tempoMeses).toFixed(2)}`);
}

aplicacaoJurosSimples(200, 0.03, 12);
aplicacaoJurosComposto(200, 0.03, 12);