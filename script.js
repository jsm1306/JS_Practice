let s=2;
let b = 3;
console.log(s+b)

console.log(s%b)
console.log(s**b)
console.log(s++)
console.log("Now s is: "+s)
console.log(++s)
console.log(s+=b)
s = 2;
b = 3;
console.log("Check: ",s==b)
console.log(s!=b)
console.log(s>b)


//Logical Operators:
let cond1 = s>b;
let cond2 = b==4;
console.log("Conditions check:",cond1&cond2)
console.log("!(s<b): ",!(s<b))
console.log(s||b)
console.log(b instanceof Number)

//conditional operators
let age = 18;
if(age>18){
    console.log("You are eligible to vote")
}
else if(age==18){
    console.log("You are still eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}
let color = 'red';
let result = color=='red'?"Color is red":"Color is not red"
console.log(result)

//Taking input:
let num = prompt("Enter a number:")
if(num%2==0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}

//Example 2:
let score = prompt("Enter your score:")
if(score>=90 && score<=100){
    console.log("Grade A")
}
else if(score>=80 && score<90){
    console.log("Grade B")
}
else if(score>=70 && score<80){
    console.log("Grade C")
}
else if(score>=60 && score<70){
    console.log("Grade D")
}
else if(score>=50 && score<60){
    console.log("Grade E")
}
else{
    console.log("Grade F")
}

//Switch case:
let day = prompt("Enter day:")
switch(day){
    case 'Monday':
        console.log("Today is Monday")
        break;
    case 'Tuesday':
        console.log("Today is Tuesday")
        break;
    case 'Wednesday':
        console.log("Today is Wednesday")
        break;
    case 'Thursday':
        console.log("Today is Thursday")
        break;
    case 'Friday':
        console.log("Today is Friday")
        break;
    case 'Saturday':
        console.log("Today is Saturday")
        break;
    case 'Sunday':
        console.log("Today is Sunday")
        break;
    default:
        console.log("Invalid input")
}
