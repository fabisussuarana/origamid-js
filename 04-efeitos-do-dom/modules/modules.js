// ASSINCRONA - não espera arquivos pesados carregarem, porém, vai executar na ordem que colocar

// SINCRONO - espera carregar antes de ir para o próximo arquivo

// -----------------------------------------------------------------------------------------------------------------------
// MODULES
// Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar 
// (use default se for único). E import nome from arquivo.js para importar.

// HTML:
{/* <script type="module" src="js/script.js"></script> */ }

// arquivo scroll-suave.js
export default function scrollSuave() {
    // ...
};

// arquivo script.js
import scrollSuave from './scroll-suave.js';

scrollSuave();

// -----------------------------------------------------------------------------------------------------------------------
// NAMED EXPORTS
// É possível exportar mais de um valor. Quando importar usar as chaves para especificar cada valor.

// arquivo scroll.js
export function scrollSuave() {
    // ...
}
export function scrollAnimacao() {
    // ...
}

// arquivo script.js
import { scrollSuave, scrollAnimacao } from './scroll.js';
scrollSuave();
scrollAnimacao();

// para importar todos os valores em um objeto
import * as scroll from './scroll.js';
scroll.scrollSuave();
scroll.scrollAnimacao();

// VALORES DO EXPORT - Podemos exportar objetos, funções, classes, números, strings e mais.
// arquivo configuracao.js
export function scrollSuave() {};
export const ano = 2000;
export const obj = {nome: 'Ford'};
export const str = 'Frase';
export class Carro {};

// arquivo script.js
import * as conf from './configuracao.js';
conf.str;
conf.obj;
conf.ano;

// CARACTERÍSTICAS
// Strict mode - 'use strict' por padrão em todos os arquivos.

// Variáveis ficam no module apenas - Não vazam para o escopo globo.

// This fora de um objeto faz referência a undefined - Ao invés de fazer referência ao window.

// Assíncrono

// USE STRICT - O modo estrito previne que algumas ações consideradas erros. Basta adicionarmos 
// 'use strict' no topo de um arquivo, que ele entrará neste modo.

'use strict';

nome = 'Ford'; // erro, variável global
delete Array.prototype; // erro, não deletável
window.top = 200; // erro, não pode mudar
const argumentos = 3.14; // escrever em palavra reservada

// por padrão, todo module está no modo estrito