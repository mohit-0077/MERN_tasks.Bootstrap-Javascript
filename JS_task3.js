function multiplyBy() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    const result = num1 * num2;
    document.getElementById('result').textContent = `${result}`;
}

function divideBy() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    if (num2 === 0) {
        document.getElementById('result').textContent = "Cannot divide by zero!";
    } else {
        const result = num1 / num2;
        document.getElementById('result').textContent = `Division Result: ${result}`;
    }
}