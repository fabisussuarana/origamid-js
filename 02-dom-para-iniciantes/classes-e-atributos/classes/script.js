const texto = document.querySelector('.texto');

console.log(texto.className); // Traz uma string contendo os nomes das classes desse elemento

console.log(texto.classList); // Traz a lista de classes do elemento

texto.classList.add('ativo'); // Adiciona uma classe
texto.classList.add('ativo2', 'ativo3');

texto.classList += ' ativo4'; // concatena a lista de classes atual com a classe 'ativo4', adicionando-a
console.log(texto.classList); 

texto.classList.remove('ativo3'); // Remove uma classe
console.log(texto.classList); 

addEventListener('click', () => {
    texto.classList.toggle('teste'); // Adiciona a classe caso não exista e remove caso exista
    console.log(texto.classList); 
    console.log(texto.classList.contains('teste')); // Retorna verdadeiro se a classe existir e falso se não existir
})

texto.classList.replace('ativo2', 'inativo'); // Substitui uma classe por outra, no caso 'ativo2' por 'inativo'
console.log(texto.classList);

// ----------------------------------------------------------------------------------------------------------------------
// EXERCÍCIO
// Remover a classe ativo de todos os itens e deixar ativo apenas o primeiro elemento

const menu = document.querySelectorAll('ul li');
const li = document.querySelector('li');

menu.forEach((item) => {
  item.classList.remove('ativo');  
})

// li.classList.add('ativo');
// OU USANDO A POSIÇÃO DO ITEM NO ARRAY
menu[0].classList.add('ativo');