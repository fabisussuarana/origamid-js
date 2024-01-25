// Forms
// como pegar os valores dos formulários

document.forms; // lista com os formulários
document.forms.contato; // form com nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro

// -----------------------------------------------------------------------------------------------------------------------
// VALUES
// A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar),
// podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças, ou seja,
// só depois que o usuário terminar de digitar.

const form = document.getElementById("contato");
function handleKeyUp(event) {
  console.log(event.target.value);
}
form.addEventListener("keyup", handleKeyUp);

// -----------------------------------------------------------------------------------------------------------------------
// VALIDAÇÃO
// O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage
// possui a mensagem padrão de erro do browser. É possível modificar com setCustomValidity('')

const form2 = document.getElementById("contato_required");
function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    // nextElementSibling pega o elemento logo abaixo, no caso o span
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove("invalido");
  }
}
form2.addEventListener("change", handleChange);

// -----------------------------------------------------------------
// Precisei usar esse evento para que algumas partes de código pudessem funcionar. Provavelmente o js estava carregando antes
// do HTML, dessa forma isso não ocorre com essa parte do código.
document.addEventListener("DOMContentLoaded", function () {
  const form3 = document.getElementById("contato");
  function handleChange(event) {
    document.body.style.backgroundColor = event.target.value;
  }
  form3.addEventListener("change", handleChange);

  // -----------------------------------------------------------------------------------------------------------------------
  // DIFERENTES INPUTS
  const form4 = document.getElementById("contato");
  function handleChange(event) {
    console.log(event.target.value);
  }
  form4.addEventListener("change", handleChange);

  // -----------------------------------------------------------------------------------------------------------------------
  // CHECKBOX
  // Retorna o valor de value, se estiver checada ou não. checked retorna true ou false.

  const form5 = document.getElementById("check");
  function handleChange(event) {
    if (event.target.checked) console.log(event.target.value);
  }
  form5.addEventListener("change", handleChange);
  
  // -----------------------------------------------------------------------------------------------------------------------
  // RADIO
  // A diferença entre Radio e Checkbox é que radio aceita apenas uma seleção por grupo. Radio é agrupado pelo atributo name.
  
  const form6 = document.getElementById("radio");
  function handleChange(event) {
    if (event.target.checked) console.log(event.target.value);
  }
  form6.addEventListener("change", handleChange);
});
  
// -----------------------------------------------------------------------------------------------------------------------
// PEGANDO TODOS OS VALORES
// Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário
// colocar no formulário.

const form7 = document.getElementById("contato");
const dados = {};
function handleChange(event) {
  dados[event.target.name] = event.target.value;
}
form7.addEventListener("change", handleChange);
