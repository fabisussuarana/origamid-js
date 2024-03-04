// Chamada de Função construtora de objetos ou classe
function Button(text, background) {
    this.text = text;
    this.background = background;
}

//  Todos os objtos buttons criados vão herdar o que é feito na função
//  já que a herança no javascript é baseada em prototypes 
Button.prototype.element = function () {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton.element());

// CLASS
// O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos 
// utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos 
// continua utilizado o sistema de protótipos de uma função construtora para criar a classe.
class Button {
    constructor(text, background) {
      this.text = text;
      this.background = background;
    }
    element() {
      const buttonElement = document.createElement('button');
      buttonElement.innerText = this.text;
      buttonElement.style.background = this.background;
      return buttonElement;
    }
  }
  
  const grenButton = new Button('Comprar', 'gren');
  
