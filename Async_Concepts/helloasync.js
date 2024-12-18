// function sum(a){
//     console.log("hello")
// }
// console.log("one")
// console.log("two")

// setTimeout(sum, 4000)
// console.log("three")
// console.log("four")
// setTimeout((()=>{
//     console.log("five")
// }), 2000)

//callback functions are the function which is pased as an argument in other function
function sum(a,b){
    console.log(a+b)
}
function calculator(a,b,sumfunction){
    sumfunction(a,b)
}
calculator(2,3,sum) // 5
calculator(2,3,(a,b)=>{
    console.log(a-b)
}) // -1

//callback hell
function getdata(dataid,getnextdata){
    setTimeout((()=>{
        console.log("data id is:",dataid)
        if(getnextdata){
            getnextdata();
        }
    }),2000)
}
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4)
//         })
//     })
// })
//to solev the callback hell we use promises
//promise is a object that may produce a single value some time in the future
// it has 3 states: pending, fulfilled, rejected
let promise = new Promise((resolve,reject)=>{
    let a = 1+1
    if(a==2){
        resolve("success")
    }else{
        reject("failed")
    }
})
// promise.catch((message)=>{
//     console.log("Error message is:",message)
// })
function getsdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout((()=>{
            console.log("data id is:",dataid)
            resolve("success")
            if(getnextdata){
                getnextdata();
            }
        }),3000)
    })
}
// let promise1 = getsdata(1)
// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("This is a promise")
//         resolve("success")
//     })
// }
// let promise2= getpromise();
// promise2.then((message)=>{
//     console.log("Sucess msg is:",message)
// })
// promise2.catch((err)=>{
//     console.log("Error message is:",err)
// })


function asyncfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("Fetched data1 successfully")
        },2000)
    })
}

function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("Fetched data2 successfully")
        },2000)
    })
}
// asyncfunc1().then((res)=>{
//     console.log(res)
//     asyncfunc2().then((res)=>{
//         console.log(res)
//     })
// })
function getnewdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("new data",dataid)
            resolve("Fetched new data successfully")
        },2000)
    })
}
async function fetchingdata(){
    await getnewdata(23)
    await getnewdata(24)
    await getnewdata(25)
    await getnewdata(26)

}
fetchingdata()
//or function can be executed without explicitly calling it by using IIFE
(async function (){
    await getnewdata(23)
    await getnewdata(24)
    await getnewdata(25)
    await getnewdata(26)

})()