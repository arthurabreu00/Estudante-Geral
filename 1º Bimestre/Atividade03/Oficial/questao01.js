// Faça um script que solicite ao usuário o valor do litro de combustível (ex. 3,05) e quanto em
// dinheiro ele deseja abastecer (ex. 50,00). Calcule quantos litros de combustível o usuário
// obterá com esses valores.


let litro = prompt("Digite o valor do litro da gasosa.");
let dinheiro = prompt("Digite o valor do abastecimento.")

alert((litro*dinheiro).toFixed(2));