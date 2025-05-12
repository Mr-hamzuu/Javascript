

const mysymbol = Symbol("hello")
const n = "Name";
const obj = {
    ["Full " + n]: "Hamza",
    [mysymbol]: "help",
    id: 23
};
obj["id"] = 99;
console.log(obj)
// if we freeze a key then it will never updated
// Object.freeze(obj);
// Now it will not updated after that
obj["id"] = 88
console.log(obj)
console.log("id" in obj)

delete obj["id"]
console.log(obj)

obj.greeting = function () {
    console.log(`Hello my name ${this.name}`);
}
console.log(obj.greeting())

// Copying one obj in another without reference ,by default it will copy through reference
const obj1 = {
    name: "Umer",
    last_name: "khan"
}
const obj2 = {
    id: {
        arid: 2024
    }
}
Object.assign(obj1, obj2) //.assign(destination,source)
console.log(obj1)

// combining all objects
// const obj3=Object.assign({},obj1,obj2) OR use spread operater
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)

// This is through reference
let ob1 = {
    name: "Hamza",
    id: 34
};
console.log(ob1)
let ob2 = ob1;
ob2.id = 76;

console.log(ob1)
console.log(ob2)

// Combining all keys and store it in array
console.log(Object.keys(obj1))
// Combining all values and store it in array
console.log(Object.values(obj1))
// Combining all keys and values and store it in array
console.log(Object.entries(obj1))
console.log(obj1.hasOwnProperty('id'))

// Destructure in obj : it is mostly used in react js, we can use it in js for better experince for future
const newobject = {
    Aridno: "24-Arid-1044",
    cgpa: 3.29
};
// {properties name : new name} = object name;
const { Aridno: a } = newobject;
console.log(a);

// In this line we see that if newobject is availaible then move on to arid no if arid no is availaible then move on address if address is availaible then print the address else print "not avaialalbe"
console.log(newobject?.Aridno?.address??"not availaible");

// JSON have two syntax 1 is in object form and 2 is in array form
// 1) object form
// {
    //     "name":"hamza",
    //     "name":"hamza",
    //     "name":"hamza"
    // }
    
// 2) Array form
// [
//     {},
//     {},
//     {}
// ]



// Practice 
const book1={
    title:"the witcher",
    auther:"HAmza",
    year:2000,
    getres:[
        "fantasy","horror"
    ]
}
const book2={
    title:"the lion",
    auther:"hadi",
    year:2010,
    getres:[
        "adventure","horror"
    ]
}
const book3={
    title:"the power",
    auther:"muzzi",
    year:2011,
    getres:[
        "fantasy","horror"
    ]
}

const librarey=[book1,book2,book3];
console.log(librarey[1]["auther"],librarey[1]["title"])
console.log(librarey[2].getres[0])
librarey[0]["year"]=1988;
console.log(librarey[0].year)
librarey[1].getres[2]="tasty";
console.log(librarey[1].getres)
console.log(librarey)