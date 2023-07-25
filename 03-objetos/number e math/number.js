// Number.isNaN() - verifica se o valor passado é true ou false, ou seja, é NaN ou não
console.log(Number.isNaN(NaN));

// Number.isInteger() - verifica se o valor passado é true ou false, ou seja, é inteiro ou não
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(25.5)); // false

// -----------------------------------------------------------------------------------------------------
// parseFloat() - serve para retornarmos um número a partir de uma string. A string deve começar com um 
// número. 
// parseInt() - serve para retornar um número a partir de uma string também, porém, também possui o
// parâmetro Radix, onde 10 é para decimal, 8 para octal, 2 para binários...

console.log(parseFloat('100 reais')); // 100
console.log(parseInt('1111', 2)); // 15 - ou seja, o valor 15 em binário é 1111

// -----------------------------------------------------------------------------------------------------
// toFixed - arredonda o número com base no total de casas decimais do argumento.

const preco = 2.99;
console.log(preco.toFixed());  // o que sai é uma string

// -----------------------------------------------------------------------------------------------------
// toLocaleString(lang, options) - formata o número de acordo com a língua e opções passadas.

let valor = 48.49;

valor = valor.toLocaleString('en-US', {style: 'currency', currency: 'BRL'});

console.log(valor);

// -----------------------------------------------------------------------------------------------------
// Math - é um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

console.log(Math.PI);

// Math.abs(x) - retorna o valor absoluto, ou seja, transforma negativo em positivo.

console.log(Math.abs(-5));

// Math.ceil(x) - arredonda para cima, retornando sempre um inteiro

console.log(Math.ceil(7.34));

// Math.floor(x) - arredonda sempre para baixo, retornando sempre um inteiro

console.log(Math.floor(4.6));

// Math.round(x) - arredonda para o número integral mais próximo

console.log(Math.round(10.3));

// Math.max(x) - retorna o maior número de uma lista de argumentos.

console.log(Math.max(5, 10, 9, 8, 15));

// Math.min(x) - retorna o menor número de uma lista de argumentos.

console.log(Math.min(4, 3, 10, 14, 6));

// Math.random() - retorna um número aleatório entre 0 e 1.

console.log(Math.floor(Math.random() * 500)); // entre 0 e 500
// o acréscimo é feito de 0.002 em 0.002, ex.: 0.002 * 500 é igual a 1, e 0.004 * 500 é igual a 2.
// Dessa forma, se multiplicarmos 0.003 por 500, o valor quebra para 1.5, mas normalmente trabalhamos
// com valores inteiros, então para sempre ter um retorno inteiro correto, arredondamos para baixo usando o floor.
// Assim, sempre que a multiplicação quebrar, o valor antes da vírgula que contará.

console.log(Math.floor(Math.random() * (70 - 30 + 1)) + 30); // entre 30 e 70.

// -----------------------------------------------------------------------------------------------------
// trimp() - retira espaços em branco.

// -----------------------------------------------------------------------------------------------------
// Exercício

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 27, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros); // ... - pega cada elemento do vetor, como um foreach.

console.log(numeroMaximo); 