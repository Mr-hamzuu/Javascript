
let array=[23,34,56,67,8,9,78]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

// Table
let n=4;
for (let index = 0; index <= 10; index++) {
    if (index==0) {
        continue;
    }
    if (n*index===28) {
        break;
    }
    console.log(`${n} * ${index} = ${index*n}`);
}

let c=0;
while (c<=11) {
    console.log("Hello world ",c);
    c++;
}

do {
    console.log("hamza")
} while (c>23);

for (const i of array) {
    console.log(`The values is ${i}`);
}

// Map Datatype
// A Map is a collection of key-value pairs where:
// Keys can be any data type (not just strings like in regular objects).
// It remembers the order of insertion.
// It provides useful built-in methods like .set(), .get(), .delete(), .has().

const mymap=new Map();
mymap.set("Name","HAmza");
mymap.set("age",20);
mymap.set("Degree","SE");
mymap.set(23,"Position");

console.log(mymap);

for (const [key,value] of mymap) {
    console.log(`${key} :- ${value}`);
    
}


// In For-in loop it give us index(keys) and for of loop it directly give us values
const obj1={
    SE:"Software engineering",
    CS:"Computer science",
    DVM:"Docter of Veternary"
};
console.log("\nObjects : ");

for (const key in obj1) {
    console.log(`${key} : ${obj1[key]}`);
    
}

const arr=["apple","orange","mango"]
for (const key in arr) {
   console.log(`The index of ${arr[key]} is ${key}`);
   
}

// there is another type of loop that available in js which is foreach loop it will apply on each index of array, Foreach loop can never return any values
 arr.forEach(function (items) {
    console.log(items);
 })
//  we can also use an arrorw function in foreach 
arr.forEach((items,index,array)=>{
    console.log(items,index,array);
    
})
// we can also do it like this
function sample(items) {
    console.log(items);
}
arr.forEach(sample)

const array2=[
    {
        name:"Javascript",
        shortform:"js"
    },
    {
        name:"python",
        shortform:"py"
    },
    {
        name:"cpp",
        shortform:"c++"
    }
]

array2.forEach((items)=>{
    console.log(items.name,":",items.shortform);
})