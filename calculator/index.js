const bottom = document.getElementsByClassName("bottom")[0]
const equation = document.getElementsByClassName("equation")[0]
const history = document.getElementsByClassName("history")[0]
const answer = document.getElementsByClassName("answer")[0]



const bottomHandler = (event) => {
    const currentCharacter = String(event.target.title)



    if(currentCharacter === "=") {
        equation.innerHTML = (String(equation.innerHTML))
        answer.innerHTML = String(eval(equation.innerHTML))
        localStorage.setItem("history",equation.innerHTML)
        history.innerHTML = localStorage.getItem("history")
        return
    }

    if(currentCharacter === "C") {
        equation.innerHTML = ""
        return
    }

    
    const newString = String(equation.innerHTML) + currentCharacter
    equation.innerHTML = newString
}



bottom.addEventListener("click",bottomHandler)