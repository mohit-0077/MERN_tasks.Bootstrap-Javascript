function displayDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
    document.getElementById('dateDisplay').style.display = 'block';
}

function displayTime() {
    const currentDate = new Date();
    document.getElementById('timeDisplay').textContent = currentDate.toString();
    document.getElementById('timeDisplay').style.display = 'block';
}

document.getElementById('showDateButton').addEventListener('click', displayDate);
document.getElementById('showTimeButton').addEventListener('click', displayTime);