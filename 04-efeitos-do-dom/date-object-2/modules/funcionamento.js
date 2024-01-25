export default function initFuncionamento() {

}

const funcionamento = document.querySelector('[data-semana]');

// - Em funcionamento está a tag inteira. 
// - Usando o dataset.semana consigo selecionar os data da tag e o valor do data especificado(nome após o data- na taga), no caso o data-semana.
// - O split transforma a string em array, pra facilitar trabalhar com ela.
// - O map(Number) transforma as strings dentro do array em números.
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horaAgora = dataAgora.getHours();

// Quando usa o indexOf ele traz a posição em que o valor de diaAgora(o dia da semana atual) está na string diasSemana,
// caso não esteja ele retorna -1, usando a comparação em vez de retornar a posição, retorna true ou false.
const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
const horarioAberto = (horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1]);

if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto');
}