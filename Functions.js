function name() {
  console.log(`Hello world`);
  console.log(`Hello Hamza`);
}
name();

// // // Arrow function
// // const mul = (a, b) => {
// //   s = a * b;
// //   return s;
// // };
// // console.log(mul(4, 3));

// // function vowel(a) {
// //   let count = 0;
// //   for (let element of a) {
// //     if (
// //       element === "a" ||
// //       element === "e" ||
// //       element === "i" ||
// //       element === "o" ||
// //       element === "u"
// //     ) {
// //       count++;
// //     }
// //   }
// //   console.log(`The vowels words in this words are ${count}`);
// // }

// // vowel("Hamza");

// //Finding vowels using arrow function
// let a=(vowel)=>{
//     let count=0;
//     for (const element of vowel) {
//         if (element==='a'||element==='e'||element==="i"||element==="o"||element==='u') {
//             count++;
//         }

//     }
//     console.log(`The vowel word are ${count}`);
// }
// a('fdfdfdjfjei')

// //Work on the browser for dark theme
// let select = document.getElementById('select')
// let body = document.body;
// let boxes = document.getElementsByClassName('box')
// select.onchange = changemode;

// function changemode() {
//     if (select.value == 'white') {
//         body.style.backgroundColor = 'white';
//         body.style.color = 'black';

//         changecolor('gray')

//     }
//     else {
//         body.style.backgroundColor = 'gray';
//         body.style.color = 'white';
//         changecolor('white')

//     }
// }
// function changecolor(color) {
//     for (let box of boxes) {
//         box.style.backgroundColor = color;

//     }

// }

// const a = document.getElementById('btn');
// a.addEventListener('click', function () {
//     confirm("Button clicked!")

// })
// let x = document.getElementById('button1')
// x.addEventListener('click', change)
// function change() {
//     let name = prompt('Enter your name')
//     x.textContent="Name:"+name;
// }
// //for each function:for-each is used for arrays
// let arr=[1,2,3,4,5];
// arr.forEach((value,idx,arr) => {
//     console.log(value*value,idx,arr);
// });
// //we can also write it like this
// let calculte=(a)=>{
//     console.log(a*a);
// }
// arr.forEach(calculte);

// //map function method: It is used to create new array using old array
// let d=[1,2,3,4,5];
//     for (const element of d) {
//         console.log(element)
//     }
// let newarr=d.map((element)=>{
//     return element**2;
// })
// console.log(newarr)

// //Filter method is used to get some specific element on some condition
// const g=d.filter((e)=>{
//     if(e>3){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(g)


// //PRACTICE*************************
// //Q).1
// // function greet(name) {
// //     console.log(`Hello ${name}!`)
// // }
// // greet('Hamza');

// //Q).2
// function calculatearea(x,y=x) {
//     return x*y;
// }
// console.log(calculatearea(4,5))
// console.log(calculatearea(4))

// //Q).3
// let marks=[77,90,80,98,44]
// const h=marks.filter((e)=>{
//    if (e>=90) {
//     return e;
//    }

// })
// console.log(h)

// let user=prompt("Enter the number ");
// let arr=[];
// for(let i=1;i<user;i++){
// arr[i-1]=i;
// }
// console.log(arr)

// const sum=arr.reduce((pre,curr)=>{
//     return pre+curr;
// })
// const product=arr.reduce((pre,curr)=>{
//     return pre*curr;
// })
// console.log(`The sum of array is ${sum}`)
// console.log(`The Product of array is ${product}`)


// function name(obj){
//   return  `${obj.firstname} ${obj.lastname}`
// }
// const obj={
//     firstname:"John",
//     lastname:"wick",
// }
// console.log(name(obj))

// (function name() {
//     console.log("HEllo world")
// })()


// function n(){
//     console.log("hello ","<br>"," world");
// }
// n();

// let array=[2,3,5,6,7];
// let a=array


// function mul(n) {
//     for (let i = 1; i < 10; i++) {
//         console.log(`${n} * ${i} = ${n * i}`);
//     }
// }
// mul(9);



// let f=(x,b)=>{
//    return  x*b;
// }
// console.log(f(2,4))

// arr=[3,4,5,6,7,8];
// e=arr.reduce((pre,curr)=>pre+curr,0);
// console.log(e)

let arrowfunction = ((num) => {
  return num ** 2
})
console.log(arrowfunction(3)) // 9


// Map function is used to create a new array using older array ,we just modify older array to create a new array
arr = [2, 3, 5, 7, 8]
newarray = arr.map(value => value * 3)
console.log(newarray) //[ 6, 9, 15, 21 ]

// Filter is used to get a specific value on some condition and store it in a new variable
arrfilter = arr.filter(value_on_each_index => value_on_each_index % 2 == 0)
console.log(arrfilter) //[ 2, 8 ]

//Reduce is used to combine all the element in an array and return only one value
arrreduce = arr.reduce((previous_value, current_value) => previous_value * current_value)
console.log(arrreduce) // 1680

// rest operator : it will return all values in an array, we will unlimited argument values
// function allvalues(...num1){
//   return num1;
// }

// This function will skip first two values because we did not return first two values last values [ 5555, 344, 655 ]
function allvalues(n1, n2, ...num1) {
  return num1;
}
console.log(allvalues(200, 433, 5555, 344, 655))

let user = {
  name: "hamza",
  age: 20
};
function getobj(obj) {
  console.log(`hello my name is ${obj.name} and my age is ${obj.age}`);
}
getobj(user)
// we can also directly pass a obj
getobj({
  name: "Abu-ubaida",
  age: 22
})

function hello() {
  let c = 5
  console.log("hello ")
  function world() {
    console.log("world ", c)

  }
  world()
}
hello()

// There are two method two declare functions
// we can call simple function before declaration in JS
console.log(add(5))
function add(num) {
  return num + 5;
}
// Hoisting : we cannot call this type of function before declaration in JS which are store in variable it will give an error, This process is called HOISTING in JS.
const sub = function (num) {
  return num + 5;
}
console.log(sub(9))

// This keyword is refer to the current obj context
const obj1 = {
  name: "hamza",
  age: "22",
  welcome: function () {
    console.log(`my name is ${this.name} and my age is ${this.age}`)
    console.log(this);
  }

}
obj1.welcome()
console.log(this);

function f() {
  console.log(this);

}
f()

// Arrow function
const arrow = () => {
  console.log("hello world")
}
arrow()

// const m=(n1,n2)=>{
//   return n1+n2;
// }
// we can also write it like this
// const m=(n1,n2)=>n1+n2;
// for more accuracy 
const m = (n1, n2) => (n1 + n2);

console.log(m(3, 3));


// This is IIFE (Immediatly invoked function expression) : Avoid polluting global scope.
// we mostly use it in react js but there is one condition that before this function we terminate a statement with semicolon otherwise it will counter an error
// 1) This is named IIFE because it have a name which is airforce: You cannot call airforce() outside after this, because the name airforce is not available in the global scope.

(function airforce(name) {
  console.log(`Hello ${name}`);

})("world");

// we can also do it in arrow function
// 2) This is simple IIFE:
((name) => {
  console.log(`My name is ${name}`);
})("Hamza");


// Practice 
const obj = {
  name: "Hamza",
  "roll no ": 34,
  marks: {
    Math: 44,
    science: 55,
    english: 77
  },
  total: function () {
return this.marks.Math + this.marks.english + this.marks.science;
  }
};

((obj) => {
  console.log("Name : ", obj.name);
  console.log("roll no : ", obj["roll no "]);
  console.log("marks : ", obj.marks);
  console.log("Total marks: ", obj.total());
})(obj);