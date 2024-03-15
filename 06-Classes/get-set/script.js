// get - pega o valor para retornar para o usuário
// set - seta o valor e faz algo com ele, ou seja, é um método para receber valores e manipulá-los

// Tanto objetos quanto classes podem usar set e get

// Podemos definir comportamentos diferentes de get e set para um método.
const button = {
    get element() {
        // o underline indica que essa variável é privada, ou seja, não tem acesso a ela fora do objeto
        return this._element; 
    },
    set element(tipo) {
        this._element = document.createElement(tipo);
    }
}

button.element = 'button'; // set
button.element; // get (<button></button>);
console.log(button.element);

// Valor Estático
// Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.
const matematica = {
    get PI() {
        return 3.14;
    },
};

matematica.PI; // get (3.14)
matematica.PI = 20; // nada acontece

// SET
// Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto.
const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    },
};

frutas.nova = 'Banana';
frutas.nova = 'Morango';
console.log(frutas.lista); // ['Banana', Morango];

// CLASS - get e set
class Button {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    get element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
}

const blueButton = new Button('Comprar', 'blue');
blueButton.element; // retorna o elemento

