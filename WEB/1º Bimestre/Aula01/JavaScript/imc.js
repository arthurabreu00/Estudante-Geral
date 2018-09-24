document.querySelector("#tudo").addEventListener("pointermove",automatico);
document.querySelector(".button").addEventListener("click",button);


function button(){
    weight = document.querySelector(".peso").value = "";
    height = document.querySelector(".altura").value ="";
}

function automatico(){


        setInterval(()=>{    
                
            weight = document.querySelector(".peso").value;
            height = document.querySelector(".altura").value;
            bmi = weight/(height * height)
            if (bmi <= 100){
        
                document.querySelector(".resultFinal").innerHTML = bmi.toFixed(2)

                
                if(bmi <= 18.5){
                    document.querySelector(".resultEst").innerHTML = "Abaixo do peso"
                    document.querySelector(".resultEst").style.color = "#c71408";
                    document.querySelector("abaixo").style.color = white;
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

    

