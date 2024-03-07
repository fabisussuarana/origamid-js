// Chamada de Função construtora de objetos ou classe
function Button(text, background) {
  this.text = text;
  this.background = background;
}

//  Todos os objetos buttons criados vão herdar o que é feito na função
//  já que a herança no javascript é baseada em prototypes 

// aqui o element é basicamente um método, quando usamos função construtora fazemos dessa forma
Button.prototype.element = function () {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton.element());

// USANDO CLASS
// O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos 
// utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos 
// continua utilizado o sistema de protótipos de uma função construtora para criar a classe.
class Button2 {
  // constructors(args) {} é um método especial de uma classe. Nele você irá definir todas
  // as propriedades do objeto que será criado. Os argumentos passados em new, vão direto
  // para o constructor.
  constructor(text, background) {
    this.text = text;
    this.background = background;
    // Por padrão a classe retorna this. Ou seja, this é o objeto criado com o new Class. 
    // Podemos modificar isso alterando o return do constructor, o problema é que perderá 
    // toda a referência do objeto.
    // return this.element(); - não recomendado, se eu quiser acessar uma propriedade na
    // referencia do objeto, não conseguiria
  }
  // método
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const greenButton = new Button2('Comprar', 'green');
console.log(greenButton.element());

// THIS
// Assim como em uma função construtora, this faz referência ao objeto criado com new. 
// Você pode acessar as propriedades e métodos da classe utilizando o this.
class Button {
  constructor(text) {
    this.text = text;
  }
  element() {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  appendElementTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
  }
}

const button2 = new Button('Clique');
button2.appendElementTo('body');
