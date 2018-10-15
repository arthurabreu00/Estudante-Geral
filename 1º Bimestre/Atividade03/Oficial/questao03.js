// 3 - Faça um script que calcule o valor a ser pago por uma dívida em atraso. O usuário deve
// informar o valor original da dívida (ex. R$ 50,00), a quantidade de dias em atraso (ex. 35 dias) e
// o valor da multa pordia de atraso (ex. R$ 0,25).

var capt = prompt("Valor Original da divída");
var days = prompt("Quantidade de dias")
var time = prompt("Valor da multa por dia")

var mult = Number(capt)+(Number(days)*Number(time))

alert(mult)