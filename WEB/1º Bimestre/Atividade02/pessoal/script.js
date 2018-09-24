var order = document.querySelector(".order");
var submit = document.querySelector(".submit")
var price1 = document.querySelector(".price1").innerHTML
var price2 = document.querySelector(".price2").innerHTML
var price3 = document.querySelector(".price3").innerHTML
var price4 = document.querySelector(".price4").innerHTML
var price5 = document.querySelector(".price5").innerHTML

var sum = 0;

submit.addEventListener("click", ()=>{

    var val = order.value;
    if (val == 100){
        sum += Number(price1)
        alert("Sucesso")
    } else if (val == 101){
        sum += Number(price2)
            alert("Sucesso")
    }else if (val == 102){
        sum += Number(price3)
            alert("Sucesso")
    }else if (val == 103){
        sum += Number(price4)
            alert("Sucesso")
    }else if (val == 104){
        sum += Number(price5)
            alert("Sucesso")
    }else{
        alert("Digite um valor valido")
        
    }
    document.querySelector(".resultFinal").innerHTML = `R$ ${sum}`

 
})