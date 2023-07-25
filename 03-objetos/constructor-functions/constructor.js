// Funções construtoras constroem novos objetos sempre que são chamadas

// O new é responsável por criar um novo objeto baseado na função que passarmos a frente dele

function Carro(){
    this.marca = 'Toyota';
    this.preco = 2500;
}

// Atribuindo o objeto a carroFavorito, junto com suas propriedades e valores.
// Fazendo dessa forma, é possível alterar os valores das propriedades de carroFavorito
// sem afetar carroLegal e vice versa
const carroFavorito = new Carro();
carroFavorito.marca = 'Fiat';

const carroLegal = new Carro();

// Daí, em vez de atribuir direto assim, dá para passar parâmetros

function Lapis(marcaLapis, corLapis){
    this.marca = marcaLapis;
    this.cor = corLapis;
}

const lapisBonito = new Lapis('FaberCastell', 'Azul Marinho');
const lapisLegal = new Lapis('MoLin', 'Verde');

// ------------------------------------------------------------------------------------------------------

// As variáveis ficam protegidas dentro do objeto, dessa forma, é mostrado para os objetos criados ao qual 
//ele é atribuído, apenas os atributos, que são criados usando this. Então taxa e precoFinal não é acessado pelo objeto pc.
function Computador(marcaPc, precoPc){
    // variáveis
    const taxa = 1.2;
    const precoPcFinal = precoPc * taxa;
    // atributos
    this.marca = marcaPc;
    this.preco = precoPcFinal;
}

const pc = new Computador('Dell', 5600);

// ------------------------------------------------------------------------------------------------------
// objeto comum
// const Dom = {
//     seletor: 'li',
//     element(){
//         return document.querySelector(this.seletor);
//     },
//     ativo(){
//         this.element().classList.add('ativo');
//     }
// }

// Dom.ativo();
// Dom.seletor = 'ul';
// Dom.ativo();

function Dom(seletor){
    this.element = function() {
        return document.querySelector(seletor);
    }
    this.ativo = function(){
        this.element().classList.add('ativo');
    }
}

const li = new Dom('li');
