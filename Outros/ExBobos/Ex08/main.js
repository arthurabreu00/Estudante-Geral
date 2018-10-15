function reftory() {
    var input = document.querySelector("input")
    var menosPt = input.value.split(".").join("")
    var menosTr = menosPt.split("-").join("")

    input.value = menosTr;

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
    var Soma;
    var Resto;
    Soma = 0;

    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++){

        Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    } 


    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++){

        Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);

    }
     
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}