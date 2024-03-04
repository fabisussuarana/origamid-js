export default function initFetchBitcoin(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(bitcoin => {
        console.log(bitcoin.BRL.sell);
        const btcPreco = document.querySelector('.btc-preco');
        // cálculo para determinar quanto é 10000 em bitcoins e toFixed limita as casas decimais
        // após a vírgula 
        btcPreco.innerText = (10000 / bitcoin.BRL.sell).toFixed(4);
    }).catch(erro => {
        console.log(Error(erro));
    });
}
