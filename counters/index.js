

const heading = document.getElementById("number");
var number = heading.innerHTML;


const btm = document.getElementsByClassName("btn")
const overlay =  document.getElementsByClassName("overlay")[0]
const closeBtn = document.getElementById("close_btn")
const head = document.getElementById("heading")

const increase = btm[0]
const decrease = btm[1]

function increaseFunc() {
    number = Number(number);
    if(number < 10) {
        number = number + 1
    heading.innerHTML = number
    }
    else {
        overlay.classList.remove("hidden")
        head.innerHTML = "Number cannot go beyond 10"
    }
}

function decreaseFunc() {
    number = Number(number)
    if(number > -10) {
        number = number - 1
    heading.innerHTML = number
    }
    else {
        overlay.classList.remove("hidden")
        head.innerHTML = "Number cannot go beyond -10"
    }
}

function closeBtnHandler() {
    overlay.classList.add("hidden")
}

increase.addEventListener("click",increaseFunc)
decrease.addEventListener("click",decreaseFunc)

closeBtn.addEventListener("click",closeBtnHandler)


