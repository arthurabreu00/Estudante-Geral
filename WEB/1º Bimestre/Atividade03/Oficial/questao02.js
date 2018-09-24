// 2 - Faça um script que calcule a média de consumo de combustível de um veículo. O usuário
// deve informar o KM inicial (ex. 12500 km), o KM final (ex. 12700 km) e quantos litros foram
// gastos no percurso.

var km = prompt("KM ORIGINAL: ");
var final = prompt("KM FINAL: ");
let result = Number(km) - Number(final);
var litro = prompt("Litros gastos: ") ;
var media = Number(result)/Number(litro);
alert(`O carro faz ${media} KM/L`);