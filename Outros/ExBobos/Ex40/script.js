let cont = 1;
let porc = 0;

let audio = new Audio('mario.mp3');

this.contagem_tempo();
this.toogleAudio();
let onAudio = true;
const c = 0;

c = 1;

function toogleAudio(){
    if(onAudio){
        audio.play();
        document.querySelector('button').innerHTML = 'Desligar audio';
        onAudio = false;
    }else{
        audio.pause();
        document.querySelector('button').innerHTML = 'Ligar audio';
        onAudio = true;
    }
    
}

function contagem_tempo() {
    document.querySelector('.boneco').innerHTML = `<img src="img/mario${cont}.png" />`
    document.querySelector('.boneco').style = `left:${porc}%`;
    cont++;
    porc += 0.5;

    if (cont == 4) {
        cont = 1;
    }

    if(porc == 100){
        porc = 0;
    }

 
    setTimeout("contagem_tempo()", 200);
}