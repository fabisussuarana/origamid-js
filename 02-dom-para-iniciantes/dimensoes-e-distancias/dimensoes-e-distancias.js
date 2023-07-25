const animaisLista = document.querySelector('.animais-lista');

console.log("clientHeight: ", animaisLista.clientHeight); // Me traz o height + padding
console.log("offsetHeight: ", animaisLista.offsetHeight); // Me traz o height + padding + border
console.log("offsetHeight: ", animaisLista.scrollHeight); // Me traz o height total, mesmo dentro de scroll 
// O mesmo para width, clientWidth...

// --------------------------------------------------------------------------------------------------

// Distância entre o topo do elemento e o topo da página
const section = document.querySelector('.animais');
console.log("offsetTop: ", section.offsetTop);

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
console.log("offsetLeft: ", section.offsetLeft);

// da pra usar offsetWidth e ooffsetHeight tbm

// --------------------------------------------------------------------------------------------------

/* Método que retorna um objeto com width e height do elemento, além de outras distâncias dele em 
relação aos elementos ao seu redor */
const rect = section.getBoundingClientRect();
console.log("height + padding:", rect.height, // height + padding do elemento
            "width + padding:", rect.width, // width + padding do elemento
            "top:", rect.top, // distância até o topo
            "todas as distâncias:", rect // todas as distâncias 
)

// --------------------------------------------------------------------------------------------------

console.log("width da janela:", window.innerWidth, // width da janela
            "height da janela:", window.innerHeight, // height da janela
            "width da janela toda:", window.outerWidth, // width da janela + a janelinha aberta do inspecionar
            "height da janela toda:", window.outerHeight, // height da janela + barra do topo da janela
            "posição referente ao scroll:", window.pageYOffset
);

// não é o ideial de usar
if(window.innerWidth <= 450){
    console.log("Aplica algo na tela menor ou igual a 450px!");
}

// esse é o ideal de usar
// usa o media querie do css
const small = window.matchMedia('(max-width: 600px)');

if(small.matches){
    console.log('Tela menor ou igual a 600px');
} else{
    console.log('Tela maior que 600px!');
}

// Exercício
// Verificar a distância da primeira imagem em relação ao topo da página
const primeira_img = document.querySelector('.animais-lista img');
console.log(primeira_img.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
    const imgs = document.querySelectorAll('img');
    let soma = 0;
    
    imgs.forEach((img) => {
        soma = soma + img.offsetWidth;
    })
    console.log(soma);
}

/* resolve o problema de somar as imagens. O js carrega antes das imagens, e 
   não espera por elas, então não pega todas na hora de somar */
window.onload = function() {
    somaImagens();
}

// Verificar se o tamanho dos links está como o recomendado para telas pequenas segundo o google
// mínimo de 48px por 48px
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkHeight = link.offsetHeight;
    const linkWidth = link.offsetWidth;

    if(linkHeight >= 48 && linkWidth >= 48){
        console.log(link, 'Possui boa acessibilidade!');
    }
    else{
        console.log(link, 'Não possui boa acessibilidade!');
    }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}


/* Quando vai em inspecionar ou clica F12, e seleciona algum elemento html, ao lado dele aparece $0
   isso significa que você pode usar algum comando no console relacionado à ele. 
   Ex.: $0.classList */ 