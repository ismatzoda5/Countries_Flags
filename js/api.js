import { get } from "./dom.js";

let api="https://restcountries.com/v3.1/all"
let api1="https://restcountries.com/v3.1/name"

let search = document.querySelector(".search")
let select = document.querySelector(".select")
export async function getData(){
    try {
        let response = await fetch(api)
        let data = await response.json()
        get(data)
    } catch (error) {
        console.error(error);
    }
}
search.oninput = async()=>{
    try {
        let response = await fetch(`${api1}/${search.value}`)
        let data = await response.json()
        get(data)
    } catch (error) {
        console.error(error);
    }
}

select.onclick=()=>{
    select1()
}

async function select1() {
  try {
    let response = await fetch(api);
    let data = await response.json();

    let cop = data.filter((ab) =>
      ab.continents.includes(select.value)
    );
    if(select.value == 'All')
    getData()
    get(cop);
  } catch (error) {
    console.log(error);
  }
}



getData()