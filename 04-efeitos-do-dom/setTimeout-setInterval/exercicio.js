const bg = document.querySelector('.container');

function mudarClasse(){
    bg.classList.toggle('active');
    document.body.classList.toggle('active')
}

setInterval(mudarClasse, 3000);

// CRONÔMETRO
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo(){
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo(){
    tempo.innerText = 0;
    i = 0;
}