function calculator(){
    console.log("Calculating...");
    let num1 = Number (prompt("Enter the number"));
    let num2 = Number (prompt("Enter the number"));
    document.getElementById("calculationZone").innerHTML=`
     <p>${num1} + ${num2} = ${num1 + num2} </p>
     <p>${num1} - ${num2} = ${num1 -num2}</p>
     <p> ${num1} / ${num2} = ${num1/num2}</p>
     <p>${num1} * ${num2} = ${num1 * num2}</p>`;
}