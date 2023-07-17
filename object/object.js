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

  