// LET E CONST
{
  var a = 2;
  let b = 3;
  console.log("b:", b)
}
console.log("a:", a)

// TEMPLATE STRING
const produto = 'ipad'
console.log(`${produto} é caro!`)

// DESTRUCTURING
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)