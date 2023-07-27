import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import * as teste from "./modules/teste.js";

// import { teste as testando } from "./modules/teste.js";
// usando as eu renomeei de teste para testando
// quando não usa default na hora de exportar, precisa usar chaves na hora de importar
// testando();

teste.teste1();
teste.teste2();
console.log(teste.nome);

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();