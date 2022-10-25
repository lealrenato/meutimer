function meutimer() {
    
function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (evento) {
    const elemento = evento.target;
    if (elemento == 'iniciar') {
        relogio.classList.remove('pausado');
        relogio.classList.add('iniciado');
        clearInterval(timer);
        iniciarRelogio();
    }

    if (elemento == 'pausar') {
        if (segundos != 0) {
            relogio.classList.remove('iniciado')
            relogio.classList.add('pausado');
        }
        clearInterval(timer);
    }

    if (elemento == 'zerar') {
        relogio.classList.remove('pausado');
        relogio.classList.remove('iniciado')
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
    }
})
}
meutimer();
