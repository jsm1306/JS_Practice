//object is an entity which has both state and behaviour(properties and methods)
//every object is js has default object called prototype
// prototype acts as a reference to the object
const student ={
    name:'Sindhu',
    age:20,
    marks:96.42,
    function(){
        console.log(this.name,this.age,this.marks)
    }
}
const alice={
    function1(){
        console.log("I am Alice")
    }

}
alice.__proto__=student;//here student is the prototype of alice, alice inherits all the properties and methods of student
class User{
    constructor(){
        this.name="Sindhu";
        this.email="sindhu.j@gmail.com";
    }
    viewdata(){
        console.log(this.name,this.email)
    }
}
class Admin extends User{
    constructor(){
        super();}
    editdata(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log(this.name,this.email)
    }
}
let userobj = new User()
let adminobj = new Admin()

//try-catch concept in js
let a=20;
let b=0;
console.log(a+b);
console.log(a-b);
try{
    if(b==0){
        throw "Divide by zero error"
    }
    console.log(a/b)
}
catch(err){
    console.log(err)
}
console.log(a*b)
