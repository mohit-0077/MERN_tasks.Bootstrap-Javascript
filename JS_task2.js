function sortString() {
    var userInput = document.getElementById("inputString").value;
    var sorted = userInput.split('').sort().join('');
    document.getElementById("sortedString").textContent = sorted;
}