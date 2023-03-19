var nome = 'Fabi'

// typeof = traz o tipo da variável
console.log(typeof nome)

/* Essas barras permitem que eu use aspas 
   duplas dentro de aspas duplas sem acusar erro */
var frase = "Tenho \"17\" anos"

// Usar crase na string me permite fazer cálculo com variáveis dentro da string
var gols = 10
var frase = `Alguém fez ${gols * 2} gols`
console.log(frase)

// Tarefinha do curso:
var string = 'Palavra'
var teste = 'Tenho ' + 1 + ' PC'
var idade = 17
var nome = 'Fabiana'
var sobrenome = 'Sussuarana'
var nomeCompleto = nome + ' ' + sobrenome + ' que possui ' + (10 + 7) + ' anos'
console.log(typeof nomeCompleto)