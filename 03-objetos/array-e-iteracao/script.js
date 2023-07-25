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

// -----------------------------------------------------------------------------------------------------
// Maior valor com reduce

const numerosTeste = [10, 25, 60, 5, 35, 10];

const maiorValor = numerosTeste.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60

// -----------------------------------------------------------------------------------------------------
// reduceRight - começa a iterar da direita para a esquerda

const frutas = ['Banana', 'Morango', 'Laranja'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

console.log(frutasRight); // Uva Pêra Banana
console.log(frutasLeft); // Banana Pêra Uva

// -----------------------------------------------------------------------------------------------------
// [].some() - se pelo menos um return da iteração for truthy, ele retorna true.

const frutinhas = ['Maçã', 'Manga', 'Uva'];
const temUva = frutinhas.some((fruta) => {
  return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numerosPares = [0, 44, 22, 88, 102, 2];
const temMaior = numerosPares.some(maiorQue100); // true


// -----------------------------------------------------------------------------------------------------
// [].every() - se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos 
// um for falsy, ele irá retornar false.

const joias = ['colar', 'anel', 'tiara', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = joias.every((joia) => {
  return joia; // false
});

const numerosImpares = [7, 43, 21, 85, 101, 29];
const maiorQue3 = numeros.every(x => x > 3); // true

// -----------------------------------------------------------------------------------------------------
// [].find() - retorna o valor atual da primeira iteração que retornar um valor truthy.
// [].findIndex() - ao invés de retornar o valor, retorna o index deste valor na array.

const celulares = ['Apple', 'Xiaomi', 'Nokia', 'Motorola'];
const buscaCelular = celulares.findIndex((celular) => {
  return celular === 'Nokia'; 
}); // 2

const numerosPrimos = [2, 3, 47, 101, 113];
const buscaMaior45 = numeros.find(x => x > 45); // 47

// -----------------------------------------------------------------------------------------------------
// filter() - retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const comidas = ['Macarrão', undefined, null, '', 'Carne', 0, 'Farofa'];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta; 
}); // ['Macarrão', 'Carne', 'Farofa']

const nums = [6, 43, 22, 88, 101, 29];
const buscaMaior50 = numeros.filter(x => x > 50); // [88, 101]

// filter em objetos
const aulasProg = [
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
  
  const aulasMaiores = aulasProg.filter((aula) => { 
    return aula.min > 15;
  });
  // [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
