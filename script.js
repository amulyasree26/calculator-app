function calculate(operator) {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : "Cannot divide by zero";
            break;
    }

    document.getElementById("result").innerText =
        "Result: " + result;
}
