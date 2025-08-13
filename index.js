function calculate(operation) {
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }

    document.querySelector("#output").innerHTML = "Result: " + result;
}
