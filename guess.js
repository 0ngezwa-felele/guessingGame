
let randomNumber = Math.ceil((Math.random() * 100))

const btn = document.querySelector('.btn')
const fieldSpace = document.querySelector('.fieldSpace')
const inputBox = document.querySelector('.inputBox')


function guessingGame() {
    const num = Number(inputBox.value);

    if (num < randomNumber) {
        fieldSpace.innerHTML = "Your guess is too low";
    } else if (num > randomNumber) {
        fieldSpace.innerHTML = "Your guess is too high";
    } else {
        fieldSpace.innerHTML = `Correct, the secret number is ${num}`;
    }


    setTimeout(function () {
        display.innerHTML = "";
    }, 2000);


}

function timeOut() {
    fieldSpace.innerHTML = "Game started!"
    randomNumber = Math.ceil((Math.random() * 100))
}


btn.addEventListener('click', guessingGame)


