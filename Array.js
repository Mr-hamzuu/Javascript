//For printing arrays
let arr=[55,44,3,2,32];
for (let I = 0; I < arr.length; I++) {
    const element = arr[I];
    console.log(element);
}

// For using for of loop
let j=["hamza","umer","majid","awais"];
for (const element of j) {
    console.log(element.toUpperCase())
}

// Practice for finding average
let arrays=[44,3,33,22,66];
let sum=0;
let avg;
for (const average of arrays) {
    sum+=average;
}
avg=sum/arrays.length;
console.log(`The avg marks of student is ${avg}`)
// for applying 10% offer
let offer;
for (let value of arrays) {
    offer=value/10;
    value-=offer;
    console.log(`The value after applying 10% off is ${value}`)
}

//For adding new values at the end of an array
let a=['mango ','orange ','juice'];
a.push('red','blue')
console.log(a,'<-- Push')
//for deleting value at the end of an array 
a.pop();
console.log(a)
//for converting array in to string
let v=[44,35,7,89,8]
console.log(a.toString(),'<-- tostring')
console.log(v.toString())

//for joining Two arrays
console.log(a.concat(v,'<-- Concat'))

//For adding new values at the start of an array
a.unshift('hamza')
console.log(a , '<-- Unshift')

//for deleting value at the start of an array 
a.shift()
console.log(a,'<-- Shift')

//For selecting a values between selected index
console.log(a.slice(1,3),"<-- slice")


//for changing original array
a.splice(1,1,5656,6565)
console.log(a,"splice(strt-idx,del-indx,add-new-value)  <-- splice")


//Practice
let f=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix']
//removing value from start
f.shift()
console.log(f)
//adding value in the center
f.splice(1,1,'Ola')
console.log(f)
//adding value at the end
f.push('Amazon')
console.log(f)


// Excercises
// let arr = [23, 1, 43, 67, 45];
// let small = 0, large = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[small] > arr[i]) {
//         small = i;
//     }
//     if (arr[large] < arr[i]) {
//         large = i
//    }
// }
// console.log(`The smallest value of arrays is ${arr[small]}`)
// console.log(`The Largest value of arrays is ${arr[large]}`)


// Exe
// let arr=[34,66,222,34,55,32,222]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr.length;j++)
//     {
//     if(arr[i]==arr[j+1])
//     {
//         arr.splice(j,1)
//     }
// }
// }
// for (const element of arr) {
//     console.log(element)
// }


// let fruit=['apple','orange','banana'];
// let hamza=['apple','orange','banana'];
// fruit.push('watermallon');
// console.log(fruit)
// fruit.pop()
// console.log(fruit)
// fruit.shift()
// let g=fruit.filter(fruit=>
//     fruit!=='banana'
// )
// console.log(g)
// let k=fruit.map(value=>value+"hamza");
// console.log(k)


let newarray = new Array(1,2,3,4,5);
console.log(newarray)
newarray.push(9)
console.log(newarray)
newarray.pop()
console.log(newarray)

//It will give a boolean answer
console.log(newarray.includes(4))

//for converting to string 
const newarr=newarray.join()
console.log(newarr)
console.log(typeof newarr)

const n2=newarray.slice(1,3)
console.log(n2,"slice")
console.log(newarray,"Original array")

const n1=newarray.splice(1,2,4);
console.log(n1,"splice")
console.log(newarray,"Original array")

// For combining two or more arrays we use two method
// 1) concate:
const arr1=["HAmza","Umer","Abbas"]
const arr2=["DAniyal","HAdi"]

let resultconcate=arr1.concat(arr2);
console.log(resultconcate)

// 2) spread operater  --most recommended
let result=[...arr1,...arr2]
console.log(result)

// Dept arrays means 1 array or more array in array ,so we convert that array into one array
let array_1=[1,2,[3,4],5,6,[7,8]];
console.log(array_1) 
let final_array=array_1.flat(Infinity)
console.log(final_array) 

// to check that its an array or not
console.log(Array.isArray("Array")) 
let score1=2000
let score2=3000
let score3=4000
console.log(Array.of(score1,score2,score3)) 
// To convert to array we use 
console.log(Array.from("Array")) 