let URL = "https://cat-fact.herokuapp.com/facts"
let button = document.querySelector("#btn")
let para = document.querySelector("#fact")
const getdata = async()=>{
    console.log("Fetching data")
    let response = await fetch(URL)
    let actualdata = await response.json()
    para.innerText = actualdata[0].text
    console.log(actualdata[0])
    
}   

//promise Chaining
// function getdata(){
//     fetch(URL)
//     .then((response)=>{
//         console.log("Fetching data....")
//         return response.json()
//     }).then((data)=>{
//         para.innerText = data[0].text;
//         console.log(data[0])
//     })
// }
button.addEventListener("click",getdata)
