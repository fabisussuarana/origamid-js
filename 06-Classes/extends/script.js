// SUBCLASSES
// É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
// basicamente ela herda os métodos da classe extendida
class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log('Empinou com ' + this.rodas + ' rodas');
    }
}

const honda = new Moto(2);
honda.empinar();

// MÉTODOS
// É possível escrever em cima de um método herdado
class Veiculo2 {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto2 extends Veiculo2 {
    acelerar() {
        console.log('Acelerou muito');
    }
}

const yamaha = new Moto2(2);
yamaha.acelerar();

// SUPER
// É possível utilizar a palavra chave super para falarmos 
// com a classe que pai e acessarmos os seus métodos e propriedades.
// se tentar acessar as propriedades e métodos da classe extendida sem o super, dá erro
class Veiculo3 {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto3 extends Veiculo3 {
    acelerar() {
        super.acelerar();
        console.log('Muito');
    }
}

const Kawasaki = new Moto3(2);
Kawasaki.acelerar();

// SUPER E CONSTRUCTOR
// Podemos utilizar o super para estendermos o método constructor
class Veiculo4 {
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
}

class Moto4 extends Veiculo4 {
    constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel);
        this.capacete = capacete;
    }
}

const honda2 = new Moto4(4, 'Gasolina', true);
console.log(honda2);