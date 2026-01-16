
//Select calculator display
let inputEl = document.querySelector("#input-field");

function clickBtn(value) {

    //clear display
    if(value === "C"){
        inputEl.value = "";
    }
    
    //Hnadle operators (+ - * /)
    else if('+/-*'.includes(value)){
        if(inputEl.value === '') return; //This line prevent invalid expressions like (+8, -8 , Nan)
        inputEl.value += value
    }

    //Calculate result
    else if(value === "="){
        inputEl.value = eval(inputEl.value);  //
    }

    //number input
     else{
        inputEl.value += value;
    }
}








