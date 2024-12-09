age = 25
isfollow$ = true;
let xname = 'John';
var age = 30;
var isfollow$ = false;
let a;
console.log(age)
console.log(isfollow$)
console.log(xname)
// var : Variable can be re-declared and updated. A global scope variable
// let : Variable can be updated but not re-declared. A block scope variable
// const : Variable can neither be updated nor re-declared. A block scope variable
console.log(a) //prints undefined to console, as a value is not yet assigned to it

{
    let a = 10;
    console.log(a) //prints 10 to console
}
{
    let a = 35;
    console.log(a) //prints 35 to console
}


//Data types in JavaScript
// 7 primitive types
let salary= 700000.0;//typeof salary is number
let isMarried = false;//typeof isMarried is boolean
let name = 'John';//typeof name is string
let x;//typeof x is undefined
let y = null;//typeof y is object
let z = Symbol('symbol');//typeof z is symbol
let b = BigInt(1234567890);//typeof a is bigint

//Non- Primitive: Objects are collection of key-value pairs
let person = {
    name: 'John', //access it using person.name
    age: 25,// student['age'] can also be used to access
    isMarried: false
}
person['age']+=10;
console.log("Person's age now is: ",person['age'])//prints 35 to console

//Example:
const product={
    name : "Parker Jotter Standard CT Ball Pen",
price:270,
discount:5,
reviews: 7002,
isdeal:true
}
console.log(product)