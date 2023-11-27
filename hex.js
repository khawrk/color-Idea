const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// valid hex = #000000
const btnBg = document.getElementById('btnBg');
const colorbg = document.querySelector('.bgcolor');
const btnDiv = document.getElementById('btnDiv')
const div = document.querySelector('.exampleDiv')
const divText = document.querySelector('.divcolor')
const btnText = document.getElementById('btntext')
const textColor = document.querySelector('.textcolor')
const footerText = document.querySelector('#khawrk')

btnBg.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    colorbg.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

btnDiv.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    divText.textContent = hexColor;
    div.style.backgroundColor = hexColor;
})

btnText.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    textColor.textContent = hexColor;
    document.body.style.color = hexColor;
    footerText.style.color = hexColor
})


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}