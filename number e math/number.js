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