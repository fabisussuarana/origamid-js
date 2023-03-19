/* Uma função é um bloco de código executado e reutilizável, 
   em que se passa valores para que seja retornado outro valor */

function areaQuadrado(lado){
    console.log(lado * lado);
}

areaQuadrado(4);

// Função do valor de pi
function pi(){
    return 3.14;
}

console.log(2 * pi());


/* Parâmetro é definido quando se cria uma função, ou seja, no início dela, então pode ser passado parâmetros à ela 
   (como se fossem varáveis, já que são armazenados na memória). 

   Argumentos são definidos quando a função é executada. ou seja, quando chama ela, então pode ser passado argumentos à ela. 
   (muitas vezes são valores para serem calculados dentro dela, porém, argumentos podem ser várias coisas, incluindo funções)*/ 

function imc(peso, altura){ //parâmetros
    var imc = peso / (altura ** 2) // altura ** 2 é exponenciação, ou seja, elevando altura ao quadrado 
    return imc;
}

console.log(imc(45, 1.65));


// Evento de click
// função callback, ou seja, função que ocorre após algo que acontece
addEventListener('click', function(){ console.log('Oi') });

function mostraConsole(){
    console.log('Oieeee');
}

addEventListener('click', mostraConsole);


/* Nem sempre as funções precisam retornar valores, isso porque ela pode ser executada 
   e mostrada dentro dela mesmo, assim só é preciso passar os valores para ela. */
function imc2(peso, altura){ 
    const imc2 = peso / (altura ** 2); 
    console.log(imc2);
}

imc2(10, 1.8) // undefined ficou aqui no ar

/* Retornar vários tipos de dados em uma função não é uma boa prática
(em ifs por exemplo, dentro de uma função, em que um retorna string, outro retorna boolean) */


/* ESCOPO: variáveis criadas dentro de um bloco {} não são visíveis fora dele */
function nuncaFui(){
    var paises = 'Flórida, Argentina, Alemanha!';
    return `Eu nunca visitei os países: ${paises}`;
}

console.log(nuncaFui());
// console.log(paises) isso dá erro porque a variável paises está dentro da função nuncaFui(), e não fora.


// ESCOPO LÉXICO: variáveis criadas no contexto pai, ou seja, globalmente, podem ser acessadas po funções.
var profissao = 'programadora'

function dados(){  
    var nome = 'Fabiana';
    function outrosDados(){
        var idade = 18;
        return(`Me chamo ${nome}, tenho ${idade} anos e sou ${profissao}!`);
    }
    return outrosDados();
}

console.log(dados());


/* HOISTING: antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.
   Dessa forma, se eu passo os argumentos acima do código da função, irá funcionar tudo ok*/
   console.log(idade(17));

   function idade(minhaIdade){
        return `Eu possuo ${minhaIdade} anos de idade!`;
   }


// Criar uma função que verifique se o valor é Truthy
   function verdade(valor){
    if(valor){
        return `O valor ${valor} é verdadeiro!`;
    }
    else{
        return 'Foda em amigão!';
    }

    // Ou apenas usar !!valor para visualizar o tipo do dado
   }

   console.log(verdade('Meu namorado é muito inteligente!'));


// Criar função que retorne o perímetro de um quadrado
// Soma dos quatro lados do quadrado

   function quadrado(lado){
        if(lado > 0){
            var perimetro;
            perimetro = lado * 4;
            return perimetro;
        }
   }

   console.log(quadrado(5));

// Criar função que retorne o nome completo com dois parâmetros

   function nomeC(nome, sobrenome){
    return `Me chamo ${nome} ${sobrenome}`;
   }

   console.log(nomeC('Fabiana', 'Sussuarana'));


//  Criar uma função que verifique se um número é par

   function numPar(num){
        if(num % 2 == 0){
            return `O número ${num} é par!`;
        }
        else{
            return `O número ${num} não é par!`;
        }
   }

   console.log(numPar(10));

// Criar uma função que retorne o tipo de dado passado no argumento (typeof)

   function dados(dado){
        return typeof dado;
   }

   console.log(dados('Rodiguuuuu'));

// Utilize o addEventListener para mostrar o nome na tela quando o evento 'scroll' ocorrer
    addEventListener('scroll', function nome(){
        return console.log('Fabiiiii');
    });

    nome();

