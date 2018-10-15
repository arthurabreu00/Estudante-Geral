// 4 - Faça um programa que leia um valor inteiro e mostre na tela uma sequencia incluindo os
// dois números que vem antes, o número digitado, e os dois números que vem depois dele. Ex.:
// digitou 5; o programa mostra 3 4 5 6 7.

var lt = document.querySelector(".leitor");
var imp1 = document.querySelector(".impressao1");
var imp2 = document.querySelector(".impressao2");
var imp3 = document.querySelector(".impressao3");
var imp4 = document.querySelector(".impressao4");
var imp5 = document.querySelector(".impressao5");


// document.querySelector("#myBtn").addEventListener("click", function(){

//         imp1.innerHTML = Number(lt.value) - 1;
//         imp2.innerHTML = Number(lt.value) - 2;

//         imp3.innerHTML = lt.value;

//         imp4.innerHTML = Number(lt.value) + 1;
//         imp5.innerHTML = Number(lt.value) + 2;

    

//     var num  = Number(lt.value);
//     var num2 = num+2;

//     for (var i = num; i <= num2 ; i++) {
        

//         imp1.innerHTML = i;

//     }

// })

// var lt2 = document.querySelector(".leitor2");
// var imp = document.querySelector(".imp");
// var numI  = Number(lt2.value);
// var num3 = numI-2;

// document.querySelector("#btn").addEventListener("click", function(){
    
//     num3++;
//     imp.innerHTML = num3;
  

    
// })



document.querySelector("#myBtn").addEventListener("click", function(){

    var num  = Number(lt.value);
    var num2 = num-2;

   

    var divNova = document.createElement("div"); 
    

    divNova.appendChild(conteudoNovo); 

    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    var divAtual = document.getElementById("div1"); 
    document.body.insertBefore(divNova, divAtual); 
        

        for (var i = num2; i <= (num+2) ; i++) {
            var conteudoNovo = document.createTextNode(`${i}`); 
            console.log(i)
   
  } 
            
              
        
        });
        




