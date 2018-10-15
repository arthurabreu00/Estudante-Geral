
function formatar(){
    var mascara = '###.###.###-##'
    var documento = document.querySelector("input");
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
    
    if (texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    }

    if(documento.value.length >= 14)
        this.limpar(documento.value)
    
}


function limpar(str){

    var input = document.querySelector("input");
    var menosPt = str.split(".").join("");
    var menosTr = menosPt.split("-").join("");
    


    if (!this.TestaCPF(menosTr)) {
        input.style.background = "lightcoral";
        input.value = ""
        input.placeholder = "CPF Invalido"

        input.addEventListener("click", () => {
            input.style.background = "";
            input.placeholder = "Digite seu CPF"
        })
    } else {
        alert("CPF Valido")
    }


}

function TestaCPF(strCPF) {
    var s;
    var rst;
    s = 0;

    if(strCPF.length != 11) 
        return false

    if (strCPF == "00000000000") 
        return false;

    for (i = 1; i <= 9; i++){

        s += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    } 


    rst = (s * 10) % 11;

    if ((rst == 10) || (rst == 11)) 
        rst = 0;
    if (rst != parseInt(strCPF.substring(9, 10))) 
        return false;

    s = 0;

    for (i = 1; i <= 10; i++){
        s += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
     
    rst = (s * 10) % 11;

    if ((rst == 10) || (rst == 11)) 
        rst = 0;
    if (rst != parseInt(strCPF.substring(10, 11))) 
        return false;

    return true;
}