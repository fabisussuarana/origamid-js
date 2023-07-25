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

const linguagem = 'JavaScript';

console.log(linguagem.substring(0, 4));

// -----------------------------------------------------------------------------------------------------
// indexOf(search) e lastIndexOf(search) - retornam o index da string, assim que acham o primeiro
// caractere eles já retornam o resultado. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'guitarra';

console.log(instrumento.indexOf('r')); // retorna 5
console.log(instrumento.lastIndexOf('r')); // retorna 6 porque pega o último r que aparece

// -----------------------------------------------------------------------------------------------------
// padStart(n, string) e padEnd(n, string) - altera o tamanho da string que é definido pelo valor de n.
// Dessa forma, temos uma string com 8 caracteres, e passamos n = 10, então ela passará a ter 10 caracter.
// O segun argumento é o que vai preencher os espaços vazios, caso não seja passado, fica vazio.

const listaPrecos = ['R$ 10', 'R$ 2', 'R$ 8'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '-')); // -----R$ 10     ------R$ 2      ------R$ 8  
});

listaPrecos.forEach((preco) => {
    console.log(preco.padEnd(10, '-')); //   R$ 10-----     R$ 2------      R$ 8------     
});

// -----------------------------------------------------------------------------------------------------
// repeat(n) - repete a string n vezes

const oi = 'Oi';

console.log(oi.repeat(3));

// -----------------------------------------------------------------------------------------------------
// replace(regExp|subStr, newStr|function) - troca parte da string por outra. Podemos utilizar uma 
// regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro
// valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens); // Camisas, Bonés, Calças, Bermudas, Vestidos, Saias

let preco = 'R$ 1200,00';
preco = preco.replace(',', '.');

console.log(preco); // R$ 1200.00

// -----------------------------------------------------------------------------------------------------
// split(padrao) - divide a string de acordo com um padrão passado e retorna uma array
// join() - junta as strings e adiciona string entre os itens da array

const items = '<div>carregador</div><div>monitor</div>';
const arrayItens = items.split('div');
const novoHtml = arrayItens.join('section');

console.log(arrayItens); // <,  >carregador</,    ><,    >monitor</,    >    5 itens na array
console.log(novoHtml); // <section>carregador</section><section>monitor</section>

// -----------------------------------------------------------------------------------------------------
// toLowerCase() - retorna tudo em letra minúscula
// toUpperCase() - retorna tudo em letra maiúscula

const nome = 'Fabi';
console.log(nome.toLowerCase(), nome.toUpperCase());