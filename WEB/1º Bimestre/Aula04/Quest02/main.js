// 1 - Escreva um script para fazer o aumento Salarial de um objeto funcionário. Por padrão, o
// aumento será de 15%. Entretanto, deve ser aplicada uma regra diferente para cada faixa
// salarial. Regras:
// Para salarioAtual < 1.750,00: aumento igual a 12%
// para 1.750,00 <= salarioAtual < 2.000,00: aumento igual a 10%
// para 2.000,00 <= salarioAtual < 3.000,00: aumento igual a 7%
// para acima de 3.000,00: aumento igual a 5%.

function calculate(){

    let current = document.getElementById('current');
    let newSalary = 0;
    
    let val = Number(current.value);
    
    if(val < 1700){
      newSalary = val * 1.12;
    
    } else if(val < '2000'){
      newSalary = val * 1.10;
    } else if(val < '3000'){
          newSalary = val * 1.07;
    }else{
      newSalary = val * 1.05;
    }
    
    
    document.querySelector(".newSalary").innerHTML = newSalary.toFixed(2);
    }