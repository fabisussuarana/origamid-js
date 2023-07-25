// Métodos de object
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro);
honda.init('Honda').acelerar();

// --------------------------------------------------------------------------------------------------------------------
// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign 
// irá modificar o objeto alvo.

// ou seja, moto e caminhao "herdam" acelerar() e buzinar() de funcaoAutomovel

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const caminhao = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(caminhao, funcaoAutomovel);

// --------------------------------------------------------------------------------------------------------------------
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade 
// de serem definidas as características dessas propriedades.

const motocliceta = {}
Object.defineProperties(motocliceta, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

motocliceta.rodas = 4;

delete motocliceta.capacete;

// Existe também o Object.defineProperty, para uma propriedade única.

// --------------------------------------------------------------------------------------------------------------------
// get() e set() - é possível definir diferentes comportamentos para get e set de uma propriedade. Ao acionar uma propriedade 
// obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

const motoca = {}
Object.defineProperties(motoca, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

motoca.velocidade = 200;
console.log(motoca.velocidade);
// Velocidade 200

// --------------------------------------------------------------------------------------------------------------------
// object.getownpropertydescriptors(obj) - lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade

// --------------------------------------------------------------------------------------------------------------------
// object.getOwnPropertyNames(obj) - Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carroTeste = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carroTeste);
// ['marca', 'ano']

// --------------------------------------------------------------------------------------------------------------------
// Object.getPrototypeOf() - retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna 
// true ou false.

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

// da falso porque, apesar de serem strings iguais, são objetos diferentes, então precisam apontar para o mesmo objeto
console.log(Object.is(frutas1, frutas2)) // false

// --------------------------------------------------------------------------------------------------------------------
// Object.freeze() - impede qualquer mudança nas propriedades
// Object.seal() - previne a adição de novas propriedades e impede que as atuais sejam deletadas.
// Object.preventExtensions() - previne apenas a adição de novas propriedades.

const caneta = {
  marca: 'Bic',
  ano: 2018,
}
Object.freeze(caneta);
Object.seal(caneta);
Object.preventExtensions(caneta);

caneta.marca = 'Faber Catell';

Object.isFrozen(caneta); // true
Object.isSealed(caneta); // true
// pergunta se é extensível, como ali em cima eu previni a extensão, então ele dá falso
Object.isExtensible(caneta); // false

// --------------------------------------------------------------------------------------------------------------------
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de
// funções construtoras. {}.constructor retorna a função construtora do objeto.

const frutinhas = ['Banana', 'Uva'];
frutinhas.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

// --------------------------------------------------------------------------------------------------------------------
// hasOwnProperty('prop') - Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e 
// não do protótipo.
// propertyIsEnumerable('prop') - verifica se a propriedade é enumerável.

const objetos = ['Lâmpada', 'Martelo'];

objetos.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

// --------------------------------------------------------------------------------------------------------------------
// isprototypeof(valor) - verifica se é o protótipo do valor passado

const doces = ['Pudim', 'Brigadeiro'];

Array.prototype.isPrototypeOf(doces); // true

// --------------------------------------------------------------------------------------------------------------------
// tostring() - retorna o tipo de objeto. 
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é 
// comum utilizarmos a função direto do Object.prototype.toString.call(valor).

const frutasDeTeste = ['Banana', 'Uva'];
frutasDeTeste.toString(); // 'Banana,Uva'
typeof frutasDeTeste; // object
Object.prototype.toString.call(frutasDeTeste); // [object Array]

const fraseTeste = 'Uma String';
fraseTeste.toString(); // 'Uma String'
typeof fraseTeste; // string
Object.prototype.toString.call(fraseTeste); // [object String]

const carroDeTeste = {marca: 'Ford'};
carroDeTeste.toString(); // [object Object]
typeof carroDeTeste; // object
Object.prototype.toString.call(carroDeTeste); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]

