/* Objeto é um conjunto de variáveis e funções, que são chamadas de atributos e métodos */
var pessoa = {
    nome: 'Fabi',
    idade: 17,
}

console.log(pessoa.nome, pessoa.idade, pessoa);

// Métodos são propriedades que possuem uma função no lugar de seu valor
var quadrado = { // Object
    lados: 4,
    area: function(lado){ // Método
        return lado * lado;
    },
    perimetro: function(lado){ // Método
        return this.lados * lado;
    },
    // pode haver a variação de area:function() para area() por exemplo
    numPar(){
        return 2;
    },
}

console.log(quadrado.lados, quadrado.area(5), quadrado.perimetro(5), quadrado.numPar());

/* Semelhante as funções, os objetos possuem o dever de organizar o código em pequenas partes reutilizáveis

   console é um objeto e log() é um método

   Math é um objeto nativo do js, através dele acesso propriedades(PI por exemplo) e métodos(random por exemplo) */

console.log(Math.PI, Math.random()); // ramdom me dá um número aleatório de 0 a 1

// Organiza as informações do objeto quadrado dentro de uma tabela
console.table(quadrado);


// Posso setar valor a uma propriedade de um objeto ou adicionar estando fora dele, o msm com funções
var menu = {
    with: 100,
    bg: '#848484',
}

menu.bg = '#fff';
menu.color = '#000';

menu.esconder = function(){  //precisa escrever no console para executar: menu.esconder()
    console.log('Escondido!')
}

console.log(menu.bg, menu.color);

// O objeto tem acesso a variáveis fora dele
// O this faz referÊncia ao próprio objeto


// EXERCÍCIO
// Criar objeto com meus dados
var fabi = {
    nome: 'Fabiana',
    sobrenome: 'Sussuarana',
    idade: 17,
    sexo: 'Feminino',
    cor: 'Branca',
}

// Criar método que mostre meu nome completo
fabi.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

// Criar objeto que represente um cachorro que late quando vê homem
var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    
    latir(pessoa){
        if(pessoa === 'Homem')
            return 'Latir';
        else 
            return 'Não latir';
    }
}
