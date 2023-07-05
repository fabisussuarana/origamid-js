// Array.from() - transforma nodelist, objetos, etc. em array.

// Para transformar um objeto em array precisa ter length dentro do objeto.

const objeto = {
    0: 'teste',
    1: 'teste 1',
    2: 'teste 2',
    length: 3,
}

const objetoArray = Array.from(objeto);

// -----------------------------------------------------------------------------------------------------
// Array.of(valor) - cria uma array com os valores passados dentro dela

Array.of('Teste');

// -----------------------------------------------------------------------------------------------------
// Array() - cria um array com a quantidade de elementos definidos pelo valor colocado nela

Array(10);

// -----------------------------------------------------------------------------------------------------
// Modificadores de array
// sort() - ele coloca cada caractere em ordem crescente

const idades = [32,32,33,43,1,55,12];
idades.sort();

console.log(idades);

// unshift() - adiciona elementos ao início da array e retorna apenas o length dela

const bolsa = ['Batom', 'Identidade', 'Dinheiro'];
bolsa.unshift('Celular', 'Moletom'); // 5

// push() - adiciona elementos ao final da array e retorna apenas o length dela

bolsa.push('Estojo', 'Bolsinha'); // 7
console.log(bolsa);

// shift() - remove o elemento do começo da array e retorna esse elemento removido
const elementos = ['água', 'ar', 'terra', 'fogo'];

elementos.shift();

// pop() - remove o elemento do final da array e retorna esse elemento removido
elementos.pop();

console.log(elementos);

// reverse() - retorna a array invertida, modificando a array, ou se
console.log(elementos.reverse());