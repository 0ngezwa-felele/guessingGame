
let randomNumber = Math.ceil((Math.random() * 100))

const btn = document.querySelector('.btn')
const fieldSpace = document.querySelector('.fieldSpace')
const inputBox = document.querySelector('.inputBox')


function guessingGame() {
    const num = Number(inputBox.value);

    if (num > 100 ||num < 1 ) {
        fieldSpace.innerHTML = "Enter a number within the range of 1 to 100!";
        return
    }

    if (num < randomNumber) {
        fieldSpace.innerHTML = "Your guess is too low";

    } else if (num > randomNumber) {
        fieldSpace.innerHTML = "Your guess is too high";

    }
    else {
        fieldSpace.innerHTML = `Correct, the secret number is ${num}`;
        timeOut()
    }
}








// setTimeout(function () {
//     fieldSpace.innerHTML = "";
// }, 3000);



function timeOut() {
    setTimeout(function () {
        fieldSpace.innerHTML = "New game started!";
        randomNumber = Math.ceil((Math.random() * 100))
    }, 5000);
}


btn.addEventListener('click', guessingGame)


