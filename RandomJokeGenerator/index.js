const heading = document.getElementsByClassName("heading")[0]
const generate = document.getElementsByClassName("generate")[0]

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const API_KEY = "hP+AZ8M7BL6k8/J0T9iJLQ==aWDT1MJgrS1e6SZz"


const generateJoke = () => {
    fetch(url,{
        method:"GET",
        headers:{
            "X-Api-Key":API_KEY,
            "Content-Type":"application/json",
            "Origin":window.location.origin
        },
        mode:'cors'
    })
    .then(response => response.json())
        .then(data => {
            heading.innerHTML = data[0].joke
            
        })
        .catch(error => {
            console.log(error);
        })
}

generate.addEventListener("click",generateJoke)