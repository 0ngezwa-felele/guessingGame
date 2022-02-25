
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
    } else if (num > 100 && num < 1) {
        fieldSpace.innerHTML = "enter the correct number";
    } else {
        fieldSpace.innerHTML = `Correct, the secret number is ${num}`;
        timeOut()
    }



}




// setTimeout(function () {
//     fieldSpace.innerHTML = "";
// }, 3000);



function timeOut() {
    setTimeout(function () {
        fieldSpace.innerHTML = "New game sterted!";
        randomNumber = Math.ceil((Math.random() * 100))
    }, 5000);
}


btn.addEventListener('click', guessingGame)


