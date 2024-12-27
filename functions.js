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
// Array.forEach((val)=>{
// console.log(val*val)
// })

let calcsquare = (val)=>{
    console.log(val*val);
}
Array.forEach(calcsquare)

//map function
Array.map(val=>console.log(val))

thank = [20,30,60,45,0,32.2]
let newthank = thank.map(val=>{return val+179})
console.log(newthank)

//to filter out even numbers from an array
let evenarr = thank.filter(val=>val%2===0)
console.log(evenarr)
let evenar1r = thank.filter(val=>{
    return val%2==0;
})
console.log(evenar1r)

//reduce function is used to reduce the array to a single value
let sum1 = thank.reduce((acc,val)=>{
    return acc>val?acc:val;
})
// accumulator + current value = new accumulator
console.log(sum1)

//marks of students
studentmarks = [40,55,93,97,21,88,69,78,85,90]
let topmarks = studentmarks.filter(val=>{
    return val>90
})

console.log(topmarks)
let userinput = prompt("Enter a number")
array2 = []
for( let i=1;i<=userinput;i++){
    array2.push(i)
}
console.log("The array is: ",array2)
let sumarray = array2.reduce((acc,val)=>{
    return acc+val;
})
console.log("Sum of the array is: ",sumarray)
let productarray = array2.reduce((acc,val)=>{
    return acc*val;
})
console.log("Product of the array is: ",productarray)


function ask(greetings,yes,no){
    if(confirm(greetings)) yes()
    else no()
}
ask("hi",()=>console.log("success"),()=>console.log("failure"))