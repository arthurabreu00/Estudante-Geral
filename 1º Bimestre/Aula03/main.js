function calcular() {
    var v_campo1 = document.getElementById('campo1');
    var v_campo2 = document.getElementById('campo2');
    var resultado = Number(v_campo1.value) + Number(v_campo2.value);
    document.getElementById("saida1").innerHTML = "O resultado da soma é " +
        resultado;
}

function verificarCampo() {

    var txt = document.getElementById('campo_txt')

    if (txt.value != "") {
        alert("Você digitou " + txt.value)
    } else {
        alert("Por favor, preencha o campo!")
    }

}
