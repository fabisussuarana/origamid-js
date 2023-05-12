const texto = document.querySelector('.texto');

console.log(texto.className); // Traz uma string contendo os nomes das classes desse elemento
console.log(texto.classList); // Traz a lista de classes do elemento

texto.classList.add('ativo'); // Adiciona uma classe
texto.classList.add('ativo2', 'ativo3');
console.log(texto.classList); 

texto.classList.remove('ativo3'); // Remove uma classe
console.log(texto.classList); 

addEventListener('click', () => {
    texto.classList.toggle('teste'); // Adiciona a classe caso não exista e remove caso exista
    console.log(texto.classList); 
    console.log(texto.classList.contains('teste')); // Retorna verdadeiro se a classe existir e falso se não existir
})

console.log(texto.classList.replace('ativo', 'inativo')); 