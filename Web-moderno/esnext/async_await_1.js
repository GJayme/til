function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo)
  })
}

// esperarPor()
//   .then(() => console.log('Executando pormise 1...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando pormise 2...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando pormise 3...'))

function retornarValor() {
  return new Promise((resolve => {
    setTimeout(() => resolve(10), 5000)
  }))
}

async function retornarValorRapido() {
  return 20
}


async function executar() {
  let valor = await retornarValorRapido()

  await esperarPor(1500)
  console.log((`Async/Await 1 ${valor}...`))

  await esperarPor(1500)
  console.log((`Async/Await 2 ${valor + 1}...`))

  await esperarPor(1500)
  console.log((`Async/Await 3 ${valor + 2}...`))

  return valor + 3
}

async function executarDeVerdade() {
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()

