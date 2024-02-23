// exercício 1

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event){
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        resultadoCep.innerText = body;
    })
}

// exercício 2

const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        // coloca entre parênteses porque precisa que se transforme em string antes de usar o replace
        console.log(btcJson)
        btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
        console.log(btcDisplay.innerText)
    })
}

// setInterval(fetchBtc, 2000);

fetchBtc();

// exercício 3

const btnProxima = document.querySelector('.proxima')
const paragrafoPiada = document.querySelector('.piada')

function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
        paragrafoPiada.innerText = piada.value;
    })
}

btnProxima.addEventListener('click', puxarPiada);

puxarPiada()