const escola = "Cod3r";

console.log(escola.charAt(4)); //Retorna um caracter da String
console.log(escola.charAt(5)); // Ele retornar nada
console.log(escola.charCodeAt(3)); //Retornar o código do caracter
console.log(escola.indexOf("3")); //Retornar o indece do caracter desejado

console.log(escola.substring(1)); //Percorre do indice inicial até o final
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!")); //Concatenação concat
console.log("Escola " + escola + "!"); //Concatenação usando +
console.log(escola.replace(3, "e"));

//REGEX:
console.log(escola.replace(/\d/, "e")); //Substitui todos os digitos por e
console.log(escola.replace(/\w/g, "e")); //Substitui todas as letras por e

console.log("Ana,Maria,Pedro".split(","));
