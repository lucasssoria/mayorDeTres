import "./styles.css";

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");

btnSend.addEventListener("click", () => {
  if (number1.value>number2.value&&number1.value>number3.value){
    console.log("El numero mayor es: " + number1.value);
  } else if (number2.value>number1.value&&number2.value>number3.value){
    console.log("EL numero mayor es: " + number2.value);
  } else {
    console.log("El numero mayor es: " + number3.value);
  }
})
