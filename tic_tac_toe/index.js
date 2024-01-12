const grid = document.getElementsByClassName("grid_box")[0]


var win;


var arr = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
]


const findThePoint = new Map([
    [1,[0,0]],
    [2,[0,1]],
    [3,[0,2]],
    [4,[1,0]],
    [5,[1,1]],
    [6,[1,2]],
    [7,[2,0]],
    [8,[2,1]],
    [9,[2,2]],
])

const winnerChecking = (arr) => {
    for(let i=0;i<3;i++) {
        if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] && arr[i][2] != -1) { //checking the row
            return true
        }
        else if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] && arr[2][i] != -1) { //checking the column
            return true
        }
        else if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[2][2] != -1) { //left diagonal checking
            return true
        }
        else if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[2][0] != -1) {
            return true
        }
        else return false

    }
}



const addTheCircle = () => {
    const imageTag = document.createElement("img")

    while (true) {
        let x = Math.floor(Math.random() * 3)
        let y = Math.floor(Math.random() * 3)

        const block = ((x*3) + (y+1))
        const check = document.getElementById(block)
        
        if(check.getElementsByTagName("img").length == 0) {
            arr[x][y] = 1
            imageTag.src = "images/circle.png"
            check.appendChild(imageTag)
            win = winnerChecking(arr)
            if(win == true) {
                alert("We have our winner O")
                return
            }
            break
        }
    }
}

const winnerCheckingForX = (arr) => {
    win = winnerChecking(arr)
    if(win == true) {
        alert("We have our winner X")
        return true
    }
}

const winnerCheckingForO = (arr) => {
    win = winnerChecking(arr)
    if(win == true) {
        alert("We have our winner O")
        return true
    }
}


    const gridHandler = (event) => {

        const number = Number(event.target.id)
    
        const division = document.getElementById(event.target.id)
        const close = document.createElement("img")
    
        if(division.getElementsByTagName("img").length === 1) {
            alert("Select another division")
            return
        }
    
        const points = findThePoint.get(number)
        close.src = "images/close.png"
        division.appendChild(close)
        arr[points[0]][points[1]] = 0
        
    
    
        const res = winnerCheckingForX(arr)
        if(res == true) return
    
        setTimeout(addTheCircle,1000)
    
        const res2 = winnerCheckingForO(arr)
        if(res2 == true) return
    
    
    }



grid.addEventListener("click",gridHandler)