/*  AddEventListener: adiciona uma função callback no elemento,
    que será ativada assim que determinado evento ocorrer 
    
    elemento.addEventListener(event, callback, options)   onde options é opcional */

    
const img = document.querySelector('img');

img.addEventListener('click', function callback(){
    console.log('Clicou na imagem!');
});

/* É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função(com nome nela
    para que possa ser chamada outras vezes) ao invés de passar diretamente uma função anônima(depois para dar
    manutenção, pode haver dificuldades).
    
    Ex.: (não ativa ela diretamente com os parênteses, apenas passa o nome dela) */

// img.addEventListener('click', callback);

// -----------------------------------------------------------------------------------------------------------------------

/* Event - O primeiro parâmetro do callback é referênte ao evento, normalmente usam a letra (e) para representar */

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    // currentTarget é o elemento do evento
    console.log(event.currentTarget);
    // target é exatamente onde você clicou, nesse caso aqui, qualquer img que estiver dentro da lista ul
    console.log(event.target);
}

animaisLista.addEventListener('click', callbackLista);

// -----------------------------------------------------------------------------------------------------------------------

/* event.preventDefault() - previne o comportamento padrão do evento no browser. No caso de um link externo,
   por exempo, irá prevenir que o link seja ativado */

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event){
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener('click', clickNoLink);

// -----------------------------------------------------------------------------------------------------------------------

/* this - no caso de eventos, fará referência ao elemento em que addEventListener foi adicionado */

// -----------------------------------------------------------------------------------------------------------------------

/* Keyboard - adiciona atalhos para melhor navegação do site */

// -----------------------------------------------------------------------------------------------------------------------

// link onde possui vários eventos: https://developer.mozilla.org/en-US/Docs/Web/Events 