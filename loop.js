//For loops:
for( let i =1;i<=5;i++){
    console.log("Sindhu")
}
let str ="Sindhu"
for(let i of str){
    console.log("i:",i)
}
//used for objects and arrays
let student1={
    grade: 'A',
    marks: 90,
};
//template literals, String Interpolation
let output = `student details are ${student1.grade} and ${student1.marks}`
console.log(output)
for(let key in student1){
    console.log("values:",student1[key])
}
for(let key in student1){
    console.log("key:",key)
}
//Guess the number
// let gamenum=56
// let usernum = prompt("Guess the number");
// while(usernum!=gamenum){
    
//     usernum = prompt("Wrong number, Guess the number");
// }
// console.log("Congratulations! You guessed the number")
let string = "Sindhu"
console.log(string.length)
console.log(string[90])//undefined
// let revstring = ""
// for(let i=string.length-1;i>=0;i--){
//     revstring+=string[i]
// }
// console.log("Reverse of string is:",revstring)
let string1 = " Hello World "
console.log(string1.split(" "))
console.log(string1.toLowerCase())
console.log(string1.trim())
console.log(string1.charAt(5))
console.log(string1.slice(2,7))

let passwordgen = prompt("Enter your name")
console.log("@"+passwordgen.slice(0,5)+passwordgen.length)