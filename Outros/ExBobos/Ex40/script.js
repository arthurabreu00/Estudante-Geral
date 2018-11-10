let cont = 1;
let porc = 0;
this.contagem_tempo();

function contagem_tempo() {
    document.querySelector('.boneco').innerHTML = `<img src="img/chara-${cont}.png" />`
    document.querySelector('.boneco').style = `left:${porc}%`;
    cont++;
    porc += 0.5;

    if (cont == 4) {
        cont = 1;
    }

    if(porc == 101){
        porc = 0;
    }

    setTimeout("contagem_tempo()", 200);
}