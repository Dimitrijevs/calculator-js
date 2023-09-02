let displayValue = "";

function updateDisplay(number) {
  displayValue += number;
  document.getElementById("display").textContent = displayValue;
}


const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => {
  button.addEventListener("click", function() {
    const number = button.value;
    updateDisplay(number);
  });
});


const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach(button => {
    button.addEventListener("click", function() {
        const operator = " " + button.value + " ";
        updateDisplay(operator);
    })
})


const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function() {
    displayValue = "";
    document.getElementById("display").textContent = displayValue;
})


const equalsButton = document.getElementById("equals-button");
equalsButton.addEventListener("click", function() {
    const values = displayValue.split(" ");

    while(values.some(val => ["*", "/"].includes(val))){
        const index = values.findIndex(val => ["*", "/"].includes(val));
        const num1 = parseFloat(values[index - 1]);
        const num2 = parseFloat(values[index + 1]);
        const operator = values[index];
        let result;

        switch(operator){
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }
        values.splice(index - 1, 3, result.toFixed(2));
    }

    while(values.some(val => ["+", "-"].includes(val))){
        const index = values.findIndex(val => ["+", "-"].includes(val))
        const num1 = parseFloat(values[index - 1]);
        const num2 = parseFloat(values[index + 1]);
        const operator = values[index];
        let result;

        switch(operator){
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
        }

        values.splice(index - 1, 3, result.toFixed(2));
    }
    displayValue = values.join(' ');
    document.getElementById("display").textContent = displayValue;
});