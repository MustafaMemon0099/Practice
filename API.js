//fetch API 

let a = fetch(()=>{
        console.log ("API is successfull ")
}
)
let btn = document.querySelector("#btn")
let p = document.querySelector("#para")
const url = "https://catfact.ninja/fact"
const getcatfacts = async ()=>{
let response = await fetch (url) ;
let data = await response.json();
p.innerText = (data.fact);
}
getcatfacts()
btn.addEventListener("click", getcatfacts);