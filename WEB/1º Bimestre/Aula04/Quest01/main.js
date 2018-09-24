
function calculate(){

    let current = document.querySelector('.current').value;
    let increase = document.querySelector('.increase').value;
    let readjust = (Number(increase) / 100) + 1;  
 
    let newSalary = (Number(current) * readjust);
 
    document.querySelector(".newSalary").innerHTML = newSalary.toFixed(2);
 }
 