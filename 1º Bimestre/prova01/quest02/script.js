// 1 - Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o
// cargo, conforme a tabela abaixo. Faça uma página html e o código em javascript que leia o salário e o
// cargo de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele
// deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença.


var sal = document.getElementById('cod');
var init = document.getElementById('btn-init');
var fim = document.getElementById('btn-fim');
var result = document.getElementById('result');
var price = 0.00;



function Pedido() {

    switch (sal.value) {
        case '100':

            price += 5

            break;

        case "101":

            price += 6

            break;

        case '102':

            price += 7

            break;

        case '103':
            price += 8
            break;

        case '104':
            price += 9
            break;

        case '105':
            price += 4
            break;

        default:
            alert("Verifique o código do produto")

    }


    result.innerHTML = price.toFixed(2);

}

function Reset(){

    sal.value = null;
    result.innerHTML = 0.00;

    alert("Agradecemos, volte novamente")

}





