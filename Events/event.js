let div = document.querySelector("#div1")
function hover(){
console.log("You hovered on me");
};
div.onmouseover = hover;

let btn = document.querySelector("button")
// btn.onclick = (y) =>{
   
//     console.log("You cicked the button")
//     console.log(y)
//     return y;
// }
//eventlisteners, same event multiple tasks
btn.addEventListener("click",()=>{
    console.log("You clicked the button")
})
btn.addEventListener("click",()=>{
    console.log("You clicked the button- handler2")
})
const handler3 =()=>{
    console.log("You clicked the button- handler3")
}
btn.addEventListener("click",handler3)
btn.addEventListener("click",()=>{
    console.log("You clicked the button- handler4")
})
btn.removeEventListener("click",handler3)
//Create a toggle button
let currMode="light";
let body = document.querySelector("body")
let btnmode = document.querySelector("#mode")
btnmode.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode)

})