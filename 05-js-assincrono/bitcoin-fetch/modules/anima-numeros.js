export default function initAnimaNumeros(){
    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]');
        
        numeros.forEach((numero) => {
            // o + é para transformar em número, porque o texto vem como string
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100);
        
            let start = 0;
            const timer = setInterval(() => {
                start = start + incremento;
                numero.innerText = start;
                if(start > total) { 
                    // como o valor de start acaba ultrapassando o de total pelo fato de o incremento subir em números quebrados, 
                    // a gente passa o valor total para numero depois que os incrementos acabam.
                    numero.innerText = total;
                    clearInterval(timer) 
                };
                // ao multiplicar o tempo por um valor aleatório(Math.random()) a cada refresh na página muda a ordem em que cada número
                // termina de fazer incremento
            }, 27 * Math.random());
        });
    }
    
    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')) {
            // Para que depois que chegar na seção, pare de ficar atualizando o observer para true e a contagem dos números
            // não fiquem voltando do início toda vez que desce um pouco do scroll.
            observer.disconnect();
            animaNumeros();
        };
    }
    
    const observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, {attributes: true});
}
