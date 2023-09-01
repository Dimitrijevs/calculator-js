function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return Number(num1) - Number(num2);
}

function multiply(num1, num2){
    return Number(num1) * Number(num2);
}

function divide(num1, num2){
    return Number(num1) / Number(num2);
}


function userInput() {
    let numString = prompt("Enter a mathematical statement: ");
    numString = numString.split(" ");
    let operator = numString[1];
    let num1 = numString[0];
    let num2 = numString[2];
    
    if (operator === "+"){
        console.log(add(num1, num2));
    } else if (operator === "-"){
        console.log(subtract(num1, num2));
    } else if (operator === "*"){
        console.log(multiply(num1, num2));
    } else if (operator === "/"){
        console.log(divide(num1, num2));
    }
}


userInput();