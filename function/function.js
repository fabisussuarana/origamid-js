// Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.

function somar(n1, n2) {
    return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'

// --------------------------------------------------------------------------------------------------------------------
// function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

const carro = {
    marca: 'Ford',
    ano: 2018
}

// como marca e ano são atributos que não foram definidos dentro da função, apenas estão sendo
// passados diretamente, então a forma de passar valores para eles na cchamada da função é usando call()
// e os valores em objetos.
function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018

// --------------------------------------------------------------------------------------------------------------------
// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar 
// a referência do método ao this, utilizando o call().

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
    console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
    console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

// O this é carros, porém, o call altera o this, então mesmo que carros esteja ligado ao forEach, o call mudou o this para frutas
carros.forEach.call(frutas, (item) => {
    console.log(item);
}); // Log de cada Fruta

// --------------------------------------------------------------------------------------------------------------------
// Exemplo real - O objeto atribuído a lista será o substituído pelo primeiro argumento de call()

// criando construtor
function Dom(seletor) {
    this.element = document.querySelector(seletor)
};

// criando método ativo
Dom.prototype.ativo = function (classe) {
    this.element.classList.add(classe);
};

// criando objeto que herda coisas do construtor Dom
const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);

// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. 
// Caso contrário o método não conseguirá interagir de forma correta com o novo this.
// Como nesse caso que o ul é substituído por um li.

// criando um novo objeto
const novoSeletor = {
    element: document.querySelector('li')
}

// acesso o Dom para alcançar o método ativo, porque o novoSeletor diferente de lista, não tem nenhuma ligação com o construtor, 
// depois disso substituo o this por novoSeletor e passo a classe que será adicionada a esse novo seletor
Dom.prototype.ativo.call(novoSeletor, 'ativar');
console.log(novoSeletor);

// --------------------------------------------------------------------------------------------------------------------
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos 
// na substituição do this em call.

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function (item) {
    // filter no caso retorna o que for true, por isso listando as
    // classes e 
    return item.classList.contains('ativo');
});

// filtro retorna os itens que possuem ativo

// --------------------------------------------------------------------------------------------------------------------
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados 
// através de uma array.

// por array - se a váriavel numeros fosse uma função, teria que ser chamada dentro de [], para ser numa array
const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);
// direto separando por vírgula
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

// --------------------------------------------------------------------------------------------------------------------
// bind() - a única diferença dele para apply e call é que ele não ativa a função, então depois tem que ativar
const lis = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(lis, function (item) {
    return item.classList.contains('ativo');
});

filtrarLi();

// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento 
// da execução da mesma.

const carroBind = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function (aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}
carroBind.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
    marca: 'Honda',
};

const acelerarHonda = carroBind.acelerar.bind(honda);
acelerarHonda(200, 10);
  // Honda acelerou 200 em 10

// --------------------------------------------------------------------------------------------------------------------
// Podemos passar argumentos padrões para uma função e retornar uma nova função.

function imc(altura, peso) {
    return peso / (altura * altura);
  }
  
  const imc180 = imc.bind(null, 1.80);
  
  imc(1.80, 70); // 21.6
  imc180(70); // 21.6

// --------------------------------------------------------------------------------------------------------------------
// Exercício
// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
function criarElemento(tag, classe, conteudo){
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}

console.log(criarElemento('div', 'ativo', 'Esse é meu conteúdo'));

// --------------------------------------------------------------------------------------------------------------------
function criarH1(conteudo){
    const elemento = document.createElement('h1');
    elemento.classList.add('titulo');
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}

console.log(criarH1('Esse é meu conteúdo de h1'));