const comida = 'Hamburguer';
const bebida = new String('Água');

// length - traz a quantidade de caractere

// Para pegar o último caractere
console.log(comida[comida.length - 1]);

// -----------------------------------------------------------------------------------------------------
// charAt - traz também a quantidade de caractere, porém, quando deixa vazio usando o length,
// retorna undefine, e usando o charAt, fica sem nada

console.log(bebida.charAt(bebida.length - 1));

// -----------------------------------------------------------------------------------------------------
// concat - concatena frases

const frase = 'Uma frase';

const fraseFinal = frase.concat(' qualquer', ' concatenada');
console.log(fraseFinal);

// -----------------------------------------------------------------------------------------------------
// Includes(search, position) - procura pela string exata dentro de outra string e retorna true ou false

const fruta = 'manga';
const listaFrutas = 'amora, manga, melancia';

console.log(listaFrutas.includes(fruta, 3)); // retorna true

// -----------------------------------------------------------------------------------------------------
// endsWith(search) - procura string que termina com o que estiver entre parênteses
// startsWith(search) - procura string que começa com o que estiver entre parênteses

const objeto = 'lápis';

console.log(objeto.endsWith('pis')); // retorna true
console.log(objeto.startsWith('lá')); // retorna true

// -----------------------------------------------------------------------------------------------------
// slice(start. end) - corta a string de acordo com os valores de start e end, que pegam por caractere

const fraseTeste = 'frase';

console.log(fraseTeste.slice(0, 3)); // retorna fra - três primeiros caracteres
console.log(fraseTeste.slice(-2)); // retorna se - dois últimos caracteres
console.log(fraseTeste.slice(2, -1)); // retorna as - a partir do index 2 até o penúltimo

// -----------------------------------------------------------------------------------------------------
// substring - funciona como o slide cortando a string de acordo com os valores de start e end, porém,
// não funciona com valores negativos.

