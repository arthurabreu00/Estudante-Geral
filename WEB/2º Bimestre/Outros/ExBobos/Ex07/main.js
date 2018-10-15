var status = 0;

function troca(v){
    status++;
    if(status % 2 == 0){
        document.getElementById("on").style.display = "block";
        document.getElementById("off").style.display = "none";
    }else{
        document.getElementById("on").style.display = "none";
        document.getElementById("off").style.display = "block";
    }

}