
console.log("hello world");
console.log('hello world');
a = 34;
b = 55;
console.log(a + b);

follow = true;
console.log(follow);

let ss = undefined;
console.log(ss);
console.log("the ", ss, "type is", typeof ss);


let v = null;
console.log(v);
console.log("the ", v, "type is", typeof v);

let x = BigInt("232434");
console.log("The ", x, " type is", typeof x);

let y = Symbol("hello world");
console.log("The ", y, " type is", typeof y);


// **Creating Object*************
const hamza = {
    age: 20,
    fullName: "M-Hamza khan",
    class: "SE-1(A)",
    cgpa: 3.7,
};
console.log("The hamza type is ", typeof hamza);
console.log(hamza);

// for acessing keys in object we use two methods
// we use object name(hamza) and in double commas and bracket we use key(fullName) name e.g hamza["fullName"]
console.log(hamza["class"]);

// Another method is object name and use dot(.) and key name e.g hamza.fullname
console.log(hamza.cgpa);

// we can also give new value to the object keys like this 
hamza["age"] = 23;
console.log(hamza.age);

// we can also add,sub,mul,div in it like this with the previous value 
hamza["age"] = hamza["age"] + 33;
console.log(hamza.age);

// Practice 
const profile = {
    fullName: "shradda",
    isfollow: true,
    message: false,
    posts: 950,
    followers: 195452,
    following: 6,
    address: "Delhi India",
};
console.log(profile);
// for accessing object keys
console.log(profile.fullName);
console.log(profile.isfollow);
console.log(profile.message);
console.log(profile.posts);
console.log(profile.followers);
console.log(profile.following);
console.log(profile.address);

// Assignment operater 
let d = 4;
let g = 3;
console.log("Addition : ", d + g)
d **= g;// (d ki power g)
console.log("The power of 3 on 4 is : ", d);

// Comparison operater
console.log("d==g :", d == g);

// Conditional operater
let mode = "Dark";
let color;
if (mode === "Dark") {
    color = "Black";
}
if (mode === "light") {
    color = "white";
}
console.log(color);
// Ternary operater
mode = "light";
mode === "Dark" ? console.log("Black") : console.log("white");
// we can also store it in variable
let result = mode === "Dark" ? "black" : "white";
console.log(result);

// Excersice of if else*****************************
// let num=prompt("Enter a number");
// if (num%5===0) {
//     console.log("Number is multiple of 5");
// }
// else{
//     console.log("Number is not multiple of 5");
// }

// let marks=prompt("Enter the marks");
// if (marks>=80 && marks<=100) {
//     console.log("Grade A");
// }
// else if (marks>=60 && marks<80) {
//     console.log("Grade B");
// }
// else if (marks>=50 && marks<60) {
//     console.log("Grade C");
// }
// else {
//     console.log("Fail");
// }

// Prompt is to get the input from user in web page

let s = Boolean(0)
console.log(typeof (s))
console.log(s)

console.log("2" + 6);
console.log("2" + 6 + 9); // it will be converted to string
console.log(2 + 6 + "9"); //first it will be added then it convert to string

console.log(null === 0)

let r;
console.log(r)

// Symbol give us uniqueness 
const id = Symbol("346");
const anotherid = Symbol("346");
console.log(id === anotherid); //false

// Array
const m = [4, 5, 7, 8]
console.log(m)
console.log(typeof m)


// stack and heap
// Stack:
let no1 = 34;
let n2 = no1;
n2 = 77;
console.log(no1)
console.log(n2)
// Heap:
let obj = {
    name: "Hamza",
    id: 34
};
console.log(obj)
let obj2 = obj;
obj2.id = 76;

console.log(obj)
console.log(obj2)

// String
const string = "hamza";
const b7 = 20;
console.log(`Hello my name is ${string} and I am ${b7} year old`)
console.log(string[4])
console.log(string.length)

const names = new String("Hamza")
console.log(names)

let url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11";
console.log(url.replace('=', '-'))


// Number ***************************** 
const num = new Number(399);
console.log(num)
console.log(num.toString().length)
console.log(num.toFixed(2))// use for a fixed value after point

let num2 = 34.66
console.log(num2.toPrecision(3)) // we get a 3 digit, priority will given to a number before points

let num3 = 2000000;
console.log(num3.toLocaleString()) //2,000,000 by default it is a US currency format
console.log(num3.toLocaleString('en-IN')) //20,00,000 now it is a indian currency format

// Math *****************
let j = -46.8
console.log(Math.abs(j)) // negative value will be converted to Positive
console.log(Math.round(j)) // It will be roundof
// we will mostly use a random function of math
console.log(Math.random());//IT will give us number between 0 and 1
console.log((Math.random() * 10) + 1);//but if we multiply it with 1 then 0.356 is converted to 3.56 and for best value we will add 1 to it 

// if we want a random value between 2 values like 20 and 60 we create a formula like this 
const min = 20;
const max = 60;
                        // e.g : random value is = 0.78676
                        // 60 - 20 + 1 = 61 - 20 =41
                        // 0.78676 * 41 = 32.25716
                        // 32.25716 + 20 = 52.25716
// Math floor(52.25716) : it will converted to 52 because there is a floor func which converted to least value
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// Date 
const date=new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString());
console.log(typeof date);

let mydate=new Date(2024,2,34)
console.log(mydate.toDateString())
console.log(mydate)

let mytimestamp=Date.now()
console.log(mydate.getTime())
console.log(Math.floor(Date.now()/1000))

let newday=new Date()
console.log(newday)
console.log(newday.getDay())
console.log(newday.getMonth())

//This is another method to customize date and time
console.log(newday.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
    year:"numeric"
}))