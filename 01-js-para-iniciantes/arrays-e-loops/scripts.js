/* ARRAY é basicamente um grupo de valores, que serve para guardar 
   vários valores em uma única variável  */

var notas = [7, 5, 10, 3, 2, 1];

console.log(notas[1]);

for (let index = 0; index < notas.length; index++) {
    console.log(notas[index]);

    if(notas[index] === 3)
        break;
}

// ForEach é um método que executa uma função para cada item da array
var frutas = ['Maçã', 'Melancia', 'Uva'];
frutas.forEach(function(fruta, index){
    console.log(fruta, index);
});

// Para pegar a última fruta sem precisa contar manualmente
var ultimaFruta = frutas[frutas.length - 1];