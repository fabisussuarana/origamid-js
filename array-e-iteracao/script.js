// foreach(callback(itemAtual, index, array)) - a função de callback é executada para cada item da array.
// Possui três argumentos, itemAtual(valor do item da array), index(index do valor na array) e array(array original).

const nomes = ['Margarida', 'Pateta', 'Ariel'];

nomes.forEach(function (item, index) {
    console.log(item, index);
});

// com arrow function
const nomesDisney = ['Minnie', 'Cinderela', 'Rapunzel'];

nomesDisney.forEach((item, index) => {
    console.log(item, index);
});

// -----------------------------------------------------------------------------------------------------
// Arrow function

// const i = document.querySelectorAll('li');

// li.forEach(liItem => liItem.classList.add('ativo'));

// -----------------------------------------------------------------------------------------------------
// Modificar a Array Original - o terceiro argumento do callback é uma referência direta e se modificado 
// irá também modificar a array original

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
    console.log(array[index] = 'Carro ' + item);
})

// -----------------------------------------------------------------------------------------------------
// map(callback(itemAtual, index, array)) - praticamente a mesma coisa do foreach, porém, usada quando
// o objetivo for modificar os valores da array atual.
const marcasPc = ['Dell', 'Samsung', 'Apple'];
marcasPc.map((item) => {
    return console.log('Pc da ' + item);
});

// -----------------------------------------------------------------------------------------------------
// Arrow Function e map

const numeros = [2, 4, 6, 8, 10, 12];
const numerosX3 = numeros.map(n => n * 3);

console.log(numerosX3);

// -----------------------------------------------------------------------------------------------------
// map() com objetos

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
  // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// -----------------------------------------------------------------------------------------------------
// reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para 
// cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas 
// é na verdade apenas o retorno da iteração anterior.

const aula = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
  return (acumulador + atual); // é como fazer acumulador = acumulador + atual
});
total1; // 65

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165
