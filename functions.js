function sindhu(){
    console.log("I am Sindhu")
    console.log("I am from India")
    console.log("I am learning javascript")
}
const sum = (x,y)=>{
    return x+y;
}


function example1(){
    let stringinput = prompt("Enter a string")
    let c=0;
    for(let i=0;i<stringinput.length;i++){
        if(stringinput[i] === "a" || stringinput[i] === "e" || stringinput[i] === "i" || stringinput[i] === "o" || stringinput[i] === "u"){
            console.log(stringinput[i])
            c++;
        }
    }console.log("Number of vowels is: ",c)
}
// example1()
//associating a function to a datastructure is called method ex: foreach
// a function can be passed as a parameter to another function and it is called callback fn
Array=[20,39,45,79,25]
Array.forEach(function printval(val,idx){
    console.log(val,idx)
})
Array.forEach((val,idx)=>{
    console.log(val,idx)
})