//Calculator Programming

const display = document.getElementById("display");

const appendToDisplay = (input)=>{
    display.value += input;
}

function clearDisplay() {
    display.value= "";
}

const calculate =() =>{
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}