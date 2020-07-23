const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c
  }
}
/* 
  JSON é formato de dados e não algo que é executado!
  JSON não envia os métodos.
  São dados que são tráfegados de um lugar para outro.
*/
console.log(JSON.stringify(obj))
// console.log(JSON.parse("{ a: 1, b: 2, c:3 }")) -> Nao é formato JSON válido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c':3 }")) -> Nao é formato JSON válido
console.log(JSON.parse('{ "a": 1, "b": 2, "c":3 }')) //JSON válido!! *OBS: Qualquer texto dentro do JSON tem que estar delimitado com aspas duplas!
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))