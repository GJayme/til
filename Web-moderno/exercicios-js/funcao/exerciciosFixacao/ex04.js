/*
  04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
  A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

const divisao = (dividendo, divisor) => {
  console.log(`O valor da divisão de ${dividendo} por ${divisor} é de ${dividendo / divisor} e o resto é ${dividendo % divisor}`);
}

divisao(8, 3);