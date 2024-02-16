// promise é uma função construtora, ela pode ter dois resultados de uma promessa, 
// ser resolvida com a execução do primeiro argumento
// ou ser rejeitada com a execução do segundo argumento

const promesa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao){
        resolve({nome: 'Fabi', idade: 18});
    } else{
        reject(Error('Um erro ocorreu na promise'));
    }
});

// promesa.then((resolucao) => {
//     console.log(resolucao);
// });

// then() - callback que ocorre quando a promisse é resolvida
// catch() - callback que ocorre quando a promisse é rejeitada
 
// é possível fazer encadeamento de then() atrás de then()
const retorno = promesa
.then(resolucao => {
    console.log(resolucao);
    resolucao.profissao = 'Designer';
    return resolucao;
})
.then(resolucao => {
    console.log(resolucao);
}).catch(rejeitada => {
    console.log(rejeitada);
})

console.log(retorno);


/* As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. 
Mas sim na execução de código assíncrono que executará o resolve() ao final dele. */
const promessaDois = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolvida');
    }, 1000);
  });
  
  promessaDois.then(resolucao => {
    console.log(resolucao); // 'Resolvida' após 1s
  });

// finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele 
// será executado independente do resultado, se for resolvida ou rejeitada.

const promessaTres = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao) {
      resolve('Estou pronto!');
    } else {
      reject(Error('Um erro ocorreu.'));
    }
  });
  
  promessaTres.then(resolucao => {
    console.log(resolucao);
  }, reject => {
    console.log(reject);
  }).finally(() => {
    console.log('Acabou'); // 'Acabou'
  });

// promise.all - Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou 
// pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.
const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado')
    }, 1500)
});

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})

// promise.race() - Retornará uma nova promise assim que uma das promises for resolvida ou rejeitada,
// ou seja, a que for primeiro. Essa nova promise terá a resposta da primeira promisse que for resolvida.

const loginUser = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Login Efetuado');
    }, 1000);
  });
  const dadosUser = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Dados Carregados');
    }, 500);
  });
  
  const carregouPrimeiro = Promise.race([loginUser, dadosUser]);
  
  carregouPrimeiro.then((resposta) => {
    console.log(resposta); // Login Efetuado
  });
  