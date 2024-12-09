let numbers1 = [1,2,3,4,5]
console.log(numbers1[4])
numbers1[4]=6
console.log(numbers1[4])
let sum =0
for(let i =0; i<numbers1.length;i++){
    sum+=numbers1[i]
}
console.log(`Sum of numbers in array is: ${sum}`)
for(let val of numbers1){
    console.log(val)
}
for (let val in numbers1){
    console.log(val)//prints index
}
let prices = [100,200,300,400,500]
for(let i = 0; i < prices.length; i++){
    prices[i] = prices[i] - (prices[i] * 0.1)
}
console.log(prices)
prices.push(600)
console.log(prices.toString())
prices.unshift(50)//to add at start
console.log(prices)
prices.shift()// to remove from start
console.log(prices)
prices.splice(2,2,8,9)//to remove 2 elements from index 2 and add 8, 9
console.log(prices)