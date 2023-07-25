/* DOM - Document Object Model
   é uma interface que representa documentos HTML e XML através de objetos.
   Com ela é possível manipular e estilizar esses documentos.
   
   Toda tag html é representada pelo objeto Element e por isso herda
   os seus métodos e propriedades */

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList; // Lista as classes desse elemento

function callbackh1(){
   console.log('Clicou no', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);

// EXERCÍCIO
// REtorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Retorne o primeiro elemento da página com a classe ativo
const classAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegor
const linguagem = window.navigator.language;

// Retorne a largura da janela
const largura = window.innerHeight;