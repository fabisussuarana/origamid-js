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
// MODIFICADORES DE ARRAY
// -----------------------------------------------------------------------------------------------------

// sort() - ele coloca cada caractere em ordem crescente

const idades = [32,32,33,43,1,55,12];
idades.sort();

console.log(idades);

// -----------------------------------------------------------------------------------------------------
// unshift() - adiciona elementos ao início da array e retorna apenas o length dela

const bolsa = ['Batom', 'Identidade', 'Dinheiro'];
bolsa.unshift('Celular', 'Moletom'); // 5

// -----------------------------------------------------------------------------------------------------
// push() - adiciona elementos ao final da array e retorna apenas o length dela

bolsa.push('Estojo', 'Bolsinha'); // 7
console.log(bolsa);

// -----------------------------------------------------------------------------------------------------
// shift() - remove o elemento do começo da array e retorna esse elemento removido

const elementos = ['água', 'ar', 'terra', 'fogo'];

elementos.shift();

// -----------------------------------------------------------------------------------------------------
// pop() - remove o elemento do final da array e retorna esse elemento removido

elementos.pop();

console.log(elementos);

// -----------------------------------------------------------------------------------------------------
// reverse() - retorna a array invertida, modificando a array, ou seja, toda vez que chamar depois da modificação, vai estar invertida

console.log(elementos.reverse());

// -----------------------------------------------------------------------------------------------------
// splice(index, remover, item1, item2, ...) - adiciona valores na array a partir do index, e remove(a partir do index também) 
// a quantidade de itens que for passada no segundo parâmetro(retorna esses itens)

const corLapis = ['Azul', 'Verde', 'Branco', 'Vermelho'];

corLapis.splice(1, 0, 'Amarelo', 'Laranja'); // retorna [] já que não está removendo nada
console.log(corLapis);

corLapis.splice(3, 2, 'Marrom'); // retorna ['Verde', 'Branco']
console.log(corLapis); // substitui o Verde por Marrom e o remove, além de remover também a 
// cor seguinte a ele, já que foi passado o valor 2

// -----------------------------------------------------------------------------------------------------
// copyWithin(alvo, inicio, final) - a partir do alvo, ele irá copiar a array começando do início
// até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele
// irá utilizar como inicio o 0 e final o valor total da array.

console.log(['item1', 'item2', 'item3', 'item4', 'item5', 'item6'].copyWithin(4, 1, 3)); 
// retorno - ['item1', 'item2', 'item3', 'item4', 'item2', 'item3']

// o retorno vai trazer os items 2 e 3 na posição passada como alvo, então os dois itens são copiados
// e colados na posição escolhida. A questão é que por exemplo, ao passar 1, 3 ele não pega o valor da 
// posição 1, 2 e 3, mas sim apenas os das posições 1 e 2.

// -----------------------------------------------------------------------------------------------------
// fill(valor, inicio, final) - preenche a array com o valor, do início até o fim

console.log(['item1', 'item2', 'item3', 'item4', 'item5', 'item6'].fill('item bonus', 1, 4)); 
// retorno - ['item1', 'item bonus', 'item bonus', 'item bonus', 'item5', 'item6']

// -----------------------------------------------------------------------------------------------------
//  MÉTODOS DE ACESSO
// -----------------------------------------------------------------------------------------------------

// concat() - concatena a array com o valor passado.

const lapis1 = ['Azul'];
const lapis2 = ['Verde'];
const doisLapis = lapis1.concat(lapis2);
console.log(doisLapis);

const objetos = [].concat(lapis1, lapis2, 'Amarelo');
console.log(objetos);

// -----------------------------------------------------------------------------------------------------
// [].includes(valor) - verifica se a array possui o valor e retorna true ou false.
// -----------------------------------------------------------------------------------------------------
// [].index.of(valor) - verifica se a array possui o valor e retorna o index do primeiro valor na array(pq ele pode estar duplicado).
// -----------------------------------------------------------------------------------------------------
// [].lastIndexOf(valor) - retorna o index do último.

const linguagens = ['js', 'c', 'java', 'ruby', 'python', 'java'];

console.log(linguagens.includes('js'));
console.log(linguagens.indexOf('java'));
console.log(linguagens.lastIndexOf('java'));

// -----------------------------------------------------------------------------------------------------

// join(separador) - junta todos os valores da array e retorna uma string com eles. Se for passado um valor como parâmetro, este
// será utilizado durante a junção de cada item da array.

const nomes = ['Maria', 'Helena', 'José'];
console.log(nomes.join(' - '));

// -----------------------------------------------------------------------------------------------------
// slice(inicio, final) - retorna os itens da array começando pelo início e indo até o valor final

const paises = ['Brasil', 'Estados Unidos', 'Argentina', 'Canadá', 'Bolívia'];
console.log(paises.slice(1)); // ['Estados Unidos', 'Argentina', 'Canadá', 'Bolívia']
console.log(paises.slice(1, 3)); // retorno ['Estados Unidos', 'Argentina']

