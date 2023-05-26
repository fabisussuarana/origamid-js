const texto = document.querySelector('.texto');

// attributes: traz os atributos daquele elemento, ex.: id, data-...
console.log(texto.attributes[2]); 

// getAttribute: traz o valor do atributo
console.log(texto.getAttribute('id')); 

/* setAttribute: cria o atributo com o valor determinado caso não exista, 
e atualiza o valor do atributo caso ele exista */
texto.setAttribute('src', 'testando');

// Traz o elemento da posição determinada
console.log(texto.attributes[1]); 

// hasAttribute: se o atributo existir ele retorna verdadeiro, se não, ele retorna falso
console.log(texto.hasAttribute('src'));

// removeAttribute: remove o atributo
texto.removeAttribute(['data-teste']);