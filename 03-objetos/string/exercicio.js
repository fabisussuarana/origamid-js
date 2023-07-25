const transacoes = [
    {
        descricao: 'pão',
        valor: 'R$ 2'
    },
    {
        descricao: 'coca',
        valor: 'R$ 10'
    }
]

valorTotal = 0;
transacoes.forEach((item) => {
 // console.log(item.valor); R$ 2   R$ 10

    let apenasValor = +item.valor.replace('R$ ', ''); // o + na frente transformou em number e o replace tirou o R$

    valorTotal = valorTotal + apenasValor;
});

console.log(valorTotal);