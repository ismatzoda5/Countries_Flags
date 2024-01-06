let  box1 = document.querySelector(".box1")


    
let del = {
    
    name:localStorage.getItem("name"),
    population:localStorage.getItem("population"),
    continents:localStorage.getItem("continents"),
    capital:localStorage.getItem("capital"),
    flags:localStorage.getItem("flags"),
    AUD:localStorage.getItem("AUD"),
}


let a = document.createElement("img")
a.classList.add("a")
a.src=del.flags
let b =  document.createElement("h1")
b.innerHTML=del.name
let c =  document.createElement("h3")
c.classList.add("c")
c.innerHTML="Capital: "+del.capital
let e =  document.createElement("h3")
e.innerHTML="Continent: "+del.continents
let f =  document.createElement("h3")
f.classList.add("c")
f.innerHTML="Population: "+del.population
let d =  document.createElement("h3")
d.classList.add("d")
d.innerHTML="Currency: "+del.AUD

box1.append(a,b,c,e,f,d)
