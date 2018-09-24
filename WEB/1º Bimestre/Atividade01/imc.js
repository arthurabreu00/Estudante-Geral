document.querySelector("#tudo").addEventListener("pointermove",automatico);
document.querySelector(".button").addEventListener("click",button);


function button(){
    weight = document.querySelector(".peso").value = "";
    height = document.querySelector(".altura").value ="";
}

function automatico(){

    var dada  = 0;
        setInterval(()=>{    
                
            weight = document.querySelector(".peso").value;
            height = document.querySelector(".altura").value;
            bmi = weight/(height * height)
            if (bmi <= 100){
        
                document.querySelector(".resultFinal").innerHTML = bmi.toFixed(2)

                
                if(bmi <= 18.5){

                    document.querySelector(".resultEst").innerHTML = "Abaixo do peso"
                    document.querySelector(".resultEst").style.color = "#c71408";
         
                    // document.querySelector(".abaixo").style.color = white;
                    // document.querySelector(".abaixo").style.background = "#c71408";
                    
                }
                else if (bmi > 18.5 && bmi < 25){
         
                    document.querySelector(".resultEst").innerHTML = "Normal";
                    document.querySelector(".resultEst").style.color = "#7af442";

                }
                else if (bmi >= 25 && bmi < 30){
         
                    document.querySelector(".resultEst").innerHTML = "Sobre peso"
                    document.querySelector(".resultEst").style.color = "#f4ce42";

                } else if (bmi >= 30){
         
                    document.querySelector(".resultEst").innerHTML = "Obeso";
                    document.querySelector(".resultEst").style.color = "#c71408";

                }
            } 
            
            else{
                document.querySelector(".resultFinal").innerHTML = "0.00"
                document.querySelector(".resultEst").innerHTML = "Digite seus dados!"
                document.querySelector(".resultEst").style.color = "black"
                
            }}, 1000);
        

    }

// function defaultColor(){
//     document.querySelector(".abaixo").style.background = "E6E6E6";
//     document.querySelector(".normal").style.background = "E6E6E6";
//     document.querySelector(".sobre-peso").style.background = "E6E6E6";
//     document.querySelector(".obeso").style.background = "E6E6E6";
//     document.querySelector(".abaixo").style.color = "black";
//     document.querySelector(".normal").style.color = "black";
//     document.querySelector(".sobre-peso").style.color = "black";
//     document.querySelector(".obeso").style.color = "black";
// }

