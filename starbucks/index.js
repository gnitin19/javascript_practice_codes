const home = document.getElementsByClassName("btn")[0]
const gift = document.getElementsByClassName("btn")[1]
const order = document.getElementsByClassName("btn")[2]
const pay = document.getElementsByClassName("btn")[3]
const store = document.getElementsByClassName("btn")[4]

const clickHandler = (event) => {
    console.log(event)
    console.log("clicked")
    if(event.target.innerHTML == "Home") {
        home.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.innerHTML == "Gift") {
        gift.classList.add("active")
        home.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.innerHTML == "Order") {
        order.classList.add("active")
        gift.classList.remove("active")
        home.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.innerHTML == "Pay") {
        pay.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        home.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.innerHTML == "Store") {
        store.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        home.classList.remove("active")
    }

}


home.addEventListener("click",clickHandler)
gift.addEventListener("click",clickHandler)
order.addEventListener("click",clickHandler)
pay.addEventListener("click",clickHandler)
store.addEventListener("click",clickHandler)
