
//Select calculator display
// let inputEl = document.querySelector("#input-field");

// function clickBtn(value) {

    //clear display
    // if(value === "C"){
        // inputEl.value = "";
    // }
    
    //Hnadle operators (+ - * /)
    // else if('+/-*'.includes(value)){
        // if(inputEl.value === '') return; //This line prevent invalid expressions like (+8, -8 , Nan)
        // inputEl.value += value
    // }

    //Calculate result
    // else if(value === "="){
        // inputEl.value = eval(inputEl.value);  //
    // }

    //number input
    //  else{
        // inputEl.value += value;
    // }
// }




// console.log(Number("12"));
// console.log(Number("12+3"));
// console.log(parseFloat("12+3"));
// console.log(parseInt("12+3"));


// let firstNumber = "8";
// let operator = "+";
// let secondNumber = "7";

// console.log(Number(firstNumber) + Number(secondNumber));

// console.log("Start");

// button.addEventListener("click", () => {
//   console.log("Clicked");
// });

// console.log("End");

const inputEl = document.querySelector("#input-field");
const buttons = document.querySelectorAll(".btn");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let isSecondNumber = false;





buttons.forEach(function (button) {
    button.addEventListener("click", ()=>{
    const value = button.textContent ;
    console.clear();
console.log("CLICKED:", value);
console.table({
  firstNumber,
  operator,
  secondNumber,
  isSecondNumber
});


      //Number clicked
      if (!isNaN(value)){
          if(!isSecondNumber) {
            firstNumber += value;
            inputEl.value = firstNumber;
          }else{
            secondNumber += value;
            inputEl.value = firstNumber + operator + secondNumber;
          }
        } 
      
      //OPERATOR CLICKED  
      else if("+-*/".includes(value)){
          operator += value;
          inputEl.value = firstNumber + operator;
          isSecondNumber = true;
      }  
      
      else if (value === "=") {
      if (firstNumber === "" || secondNumber === "" || operator === "") return;
      

  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);
  let result;

  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "/") result = num1 / num2;

  inputEl.value = result;

  // prepare for next calculation
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  isSecondNumber = false;
}


      //CLEAR
      else if(value === "C"){
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isSecondNumber = false;
        inputEl.value = "";
      }
      
       console.log({firstNumber, operator, secondNumber});
         })
    })


// const fruits = ["apple","guava","watermelon","orange","mango"];

// fruits.forEach(function (fruit){
//     console.log(fruit);
// })

// const value = buttons.textContent ;

// if (!isNaN(value)){
//     console.log("Number clicked:", value);
// } else {
//     console.log("Operator clicked:", value);
// }



