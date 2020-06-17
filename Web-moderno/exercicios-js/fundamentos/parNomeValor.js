// par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
  const saudacao = 'Falaaaaa' // contexto léxico 2
  return saudacao;
};

// Objetos sao grupoas aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua nao sei e nem voce',
    numero: 999
  }
};

console.log(saudacao);
console.log(exec());
console.log(cliente)