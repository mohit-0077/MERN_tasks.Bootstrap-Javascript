function reverseNumber() {
    var userInput = document.getElementById("numberInput").value;
    var reversed = userInput.toString().split('').reverse().join('');
    document.getElementById("reversedNumber").textContent = reversed;
}