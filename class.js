// let user = {
//     name: "John",
//     age: 30,
//     sizes:{
//         height: 182,
//         width: 50
//     }
// }

// let admin = user;

// user2 = Object.assign({}, user);
// user2.name = "Alice";
// console.log(user.name); // Pete
// console.log(user2==user); // false
// console.log(user2===user); // false
// console.log(user==admin) //true
// console.log(user===admin); // true
//first way
let user = {
    name: "John",
    age: 30,
    sayhi: function(){
        console.log("hello "+this.name);
    }
    };
// user.sayhi()

//2nd way
let user1={
    name: "Sindhu",
    age: 18,
    
}
function sayhi2(){
    console.log("hello "+this.name);
}
user1.f = sayhi2;
// user1.f()

//3rd way
let user3 ={
    name: "Manasa",
    age: 30,
    sayhi(){
        console.log("hello "+this.name);
    }
}
    // let user2 = Object.assign({}, user);
    // console.log(user2.sizes == user.sizes)
    // let clone = structuredClone(user);
    // console.log(clone===user)
    // console.log( user.sizes === clone.sizes ); 
    // user.sizes.width = 60; 
    // console.log(clone.sizes.width); 