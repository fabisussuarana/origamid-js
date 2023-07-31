export default function initTooltip(){

}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(event){
    // armanezando o tooltip numa variável
    const tooltipBox = criarTooltipBox(this);

    // acessa o objeto onMouseMove, cria tooltipBox e atribui o elemento a ele
    onMouseMove.tooltipBox = tooltipBox;
    // acessa o objeto onMouseLeave, cria tooltipBox e atribui o elemento a ele
    onMouseLeave.tooltipBox = tooltipBox;

    // quando o mouse sai do mapa chama esse objeto
    this.addEventListener('mouseleave', onMouseLeave);
}

// para o tooltip desaparecer
const onMouseLeave = {
    // para que funcione as funções quando chama esse objeto, precisa usar o método handleEvent
    handleEvent(){
        this.tooltipBox.remove();
    }
}

// para o tootltip aparecer onde o mouse estiver no mapa
const onMouseMove = {
    handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
}

function criarTooltipBox(element){
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    // pega o valor do atributo aria-label
    const text = element.getAttribute('aria-label');
    tooltipBox.innerText = text;
    
    // adicionando tooltip no final do body
    document.body.appendChild(tooltipBox);
    return tooltipBox;
}