let box = document.querySelector(".box")
let dark = document.querySelector(".dark")
let light = document.querySelector(".light")
let body = document.querySelector(".body")


export  function get(data){
    box.innerHTML=""
    data.forEach(el => {
        let cont = document.createElement("div")
        cont.classList.add("cont")
        dark.onclick=()=>{
            body.style.backgroundColor="black"
            body.style.color="white"
              
         }
         light.onclick=()=>{
            body.style.backgroundColor="white"
            body.style.color="black"
         }

        let cont1 = document.createElement("div")
        cont1.classList.add("cont1")
        let cont2 = document.createElement("div")
        cont2.classList.add("cont2")
        let cont3 = document.createElement("div")
        cont3.classList.add("cont3")

        let tdName = document.createElement("h3")
        tdName.innerHTML=el.name.common
        let tdName1 = document.createElement("p")
        tdName1.innerHTML="population:"
        let tdName2 = document.createElement("p")
        tdName2.innerHTML="Continent:"
        let tdName3 = document.createElement("p")
        tdName3.innerHTML="Capital:"
        let btnInfo = document.createElement("img")
        btnInfo.classList.add("info")
        btnInfo.src="https://www.clipartmax.com/png/full/184-1846435_big-image-simbolo-de-informa%C3%A7%C3%A3o-png.png"

        let dot = document.createElement("a")
        dot.href="/info/info.html"
        dot.innerHTML="!. ..."
        dot.classList.add('dot')

    
       


        let tdImg = document.createElement("img")
        tdImg.classList.add("img1")
        tdImg.src=el.flags.png

        let tdPopul = document.createElement("p")
        tdPopul.innerHTML=el.population
        let btnLearn = document.createElement("a")
        btnLearn.classList.add("learn")
        btnLearn.innerHTML="Learn More"
        btnLearn.href=el.maps.googleMaps


        let tdContinents = document.createElement("p")
        tdContinents.innerHTML=el.continents

        let tdCapital = document.createElement("p")
        tdCapital.innerHTML=el.capital

     

        if(el.name.common == "Israel"){
            tdImg.src="https://novosti-dny.ru/uploads/posts/2019-05/15575945321a071436ad71c4453b0102acecb553f44.jpg"
            tdName.innerHTML="x"
            tdContinents.innerHTML=""
            tdCapital.innerHTML=""
            tdPopul=0
        }
       


      dot.onclick=()=>{
            localStorage.setItem("name", el.name.common);
            localStorage.setItem("population", el.population);
            localStorage.setItem("continents", el.continents);
            localStorage.setItem("capital", el.capital);
            localStorage.setItem("flags", el.flags.png);
        }


        cont1.append(tdName1,tdPopul)
        cont2.append(tdName2,tdContinents)
        cont3.append(tdName3,tdCapital)
        cont.append(tdImg,tdName,cont1,cont2,cont3,btnLearn,btnInfo,dot)
        box.append(cont)
    });
}