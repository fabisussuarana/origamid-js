const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

// função que estiliza com base no que for alterado no formulário
const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

function handleChange(event) {
  // pega o nome e valor do input clicado/alterado
  const name = event.target.name;
  const value = event.target.value;

  // passa esses valores obtidos na chamada de função de estilização
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

// salvando as infos no localStorage
function saveValues(name, value){
    localStorage[name] = value;
}

function setValues(){
    // pegando as chaves do localStorage, ou seja, background tal, color tal (elas vem como array)
    const properties = Object.keys(localStorage);
    properties.forEach(propertie => {
        // passando para a função de estilo os valores que estão guardado no localStorage
        handleStyle[propertie](localStorage[propertie]);
        // passando os valores guardados em localStorage
        controles.elements[propertie].value = localStorage[propertie];
        console.log(controles.elements)
    });
}

setValues();

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}