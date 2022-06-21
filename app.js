const startBtn = document.getElementById('start-game')
const submitBtn = document.getElementById('check-number')
let userGuess = 0
let answer = 0
function resetAnswer() {
    answer = Math.floor(Math.random()*100)
}

function getInputValue() {
    userGuess = document.getElementById("number-input").value
    document.getElementById("number-input").value = ''
    if (userGuess < answer) {
        document.getElementById("user-comment").innerHTML = "Too Low, Guess Higher"
    } else if (userGuess > answer) {
        document.getElementById("user-comment").innerHTML = "Too High, Guess Lower"
    } else {
        document.getElementById("user-comment").innerHTML = "Correct Answer!"
        resetAnswer()
    }
}
submitBtn.addEventListener('click', getInputValue)
startBtn.addEventListener('click', resetAnswer)
// Math.floor(Math.random()*100)