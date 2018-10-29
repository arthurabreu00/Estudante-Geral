let segundos = 0;
this.contagem_tempo();

function contagem_tempo() {
    document.querySelector('.contador').innerHTML = Number(segundos);
    segundos++;

    if (segundos >= 6) {
        segundos = 0;
    }

    setTimeout("contagem_tempo()", 1000);
}