
// SetTimeout    -> Eecuta a ação uma unica vez
// SetInterval   -> Executa a ação a cada intervalo de tempo
// ClearInterval -> Para a execução da ação a cada intervalo de tempo


let number = 0.0;
let cron;

let contador = document.querySelector(".contador")


function start(){
    cron = setInterval(function(){
        number++
        contador.innerHTML = number
},1000);
}

function stop(){
 clearInterval(cron)
}

function reset(){
    clearInterval(cron)
    number = 0
    contador.innerHTML = number
}