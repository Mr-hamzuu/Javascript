// <!-- ============= prototype ======================= -->

    
function multiplyby5(num) {
  return num * 5;
}
multiplyby5.power=4
console.log(multiplyby5.prototype);
console.log(multiplyby5.power);

function hello(name,cgpa){
  this.name=name;
  this.cgpa=cgpa;
}

hello.prototype.print=function print(){
  console.log(`My name is ${this.name} and my cgpa is ${this.cgpa}`);
  
}
let user=new hello("hamaz",3.36)
user.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

let heros={
  name:"hamzuu",
  age:"21",
  getdata:function get(){
    console.log(`my name is ${this.name} and my age is ${this.age}`);
    
  }
}

// in js technically all the things is an obj like array and functions  
// we can create a prototype like a built-in func in obj like this 
Object.prototype.goonboys=function g(){
  console.log(`Hello goonboys`);
}
heros.getdata()
heros.goonboys()
console.log(heros);

let arr=["hamza",3,55.4];
arr.goonboys() // Now we have created a built-in func for obj here array is also an obj
// if we created a prototype func(built-in func) for array then obj dont have access to that func because array,function is inherit from obj not obj from array
Array.prototype.hyhamza=function hy(){
  console.log("Hello guys today we have learned prototype ");
}

arr.hyhamza()
// heros.hyhamza() //<< here js give us an error because hyhamza() is an array func not obj

// ******************Inheritance in JS*************************
let student={
  studentname:"abbas",
  cgpa:3.0
}
let teacher={
  name:"Kashif",
  age:55
}
// we can inherit support from teacher
// Two methods
// 1.using (__proto__ ) inside or outside its over own choice
// 2.using 
let support={
  department:"SE",
  __proto__:teacher
};
console.log(support,support.name);
// method 1:
// teacher.__proto__=student
// method 2:
Object.setPrototypeOf(teacher,student);
console.log(teacher.studentname);

let my_name="    hamza";
String.prototype.truelength=function(){
  console.log(this);
  console.log(`${this}`);
  console.log(this.trim());
  console.log(`The true length of my name is = `,this.trim().length);
  
}

my_name.truelength();
"  raheemullah".truelength()

//========================= Call and this ======================

function setusername(username){
  this.username=username;
  console.log("This function has been called");
  
}
function userdetail(username,email,password){
  setusername.call(this,username);
  this.email=email;
  this.password=password;
}

let user_data=new userdetail("hamzuu","hamzuu6971@gmail.com","64kxKM");
console.log(user_data);

// After ES6 there is a more good syntax of using all the privous thing we had done
// The method or synatx name is CLASS:
// in class We dont have to use a function word we can direct create a method
class person {
  constructor(username,gmail,password) {
    this.username=username;
    this.gmail=gmail;
    this.password=password;
  }
  encriptedpassword(){
    return `${this.password}fsociety`;
  }

}
let newuser=new person("abbas","khan@gmail.com","234")
console.log(newuser);



// In class the inheritance will be done like this 

class admin extends person{
  constructor(username,gmail,password,salary){
    super(username,gmail,password)
    this.salary=salary;
  }
  getdata(){
    
    console.log("hellow world")
  }
}
let saqib=new admin("saqib_tarki","tarki@gmail.com","error 404",100000);
console.log(saqib);
saqib.getdata();
console.log(saqib instanceof admin);

// Bind is a method which can pass the reference of variable in function
class react{
  constructor(year,develper){
    this.year=year;
    this.develper=develper;
    this.server="https://chat.deepseek.com/"
    // document.querySelector("button").addEventListener("click",this.getdata.bind(this))
  }
  getdata(){
    console.log("User clicked");
    console.log(this.server);
    
  }
}
let button=new react(2006,"Charlie");
button.getdata()

// Descriptor in JS
// Descriptor is used to check that we can update the object value or not
// for example The value of PI is not updated so we can check it like this 
console.log(Math.PI);
// Object.getOwnPropertyDescriptor(Object,"attribute") //syntax
let pi_value=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(pi_value);
// so the output is :
// {
//   value: 3.141592653589793,
//   writable: false, <- its values cannot be updated 
//   enumerable: false,
//   configurable: false
// }

// Now we can create our own Decriptor Object value
let obj={
  name:"danial",
  age:20,
  data:function(){
    console.log("lets go");
    
  }
}
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// here its properties is updatable 
// {
//   value: 'danial',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// so we want to change the properties
Object.defineProperty(obj,'name',{
  writable:false,
  enumerable:true //if i apply false here then in loop this value will not be iterable like it will not show in loop
})
//   console.log(Object.getOwnPropertyDescriptor(obj,"name"));

for (const [key,value] of Object.entries(obj)) {
  if(typeof(value)!="function"){
    console.log(`${key} : ${value}`);
  }
  
}

// getter and setter in js
class Person{
  constructor(name,location){
    this.name=name;
    this.her_location=location;
  }
  get name(){
    return this._name.toUpperCase();
  }
  set name(value){
    this._name=value;
  }
}
let special=new Person("Someone_Special","Somewhere in Rawalpindi")
console.log(special);


// lexical and closure in js 
// lexical scope mean inner() can access name because it’s defined inside outer(), and scope is decided at definition time, not runtime.
function outer(){
  let name = "hamzuu";
  function inner(){
    console.log(`my name is ${name}`);
  }
  inner()
}
outer()

// A closure is created when an inner function remembers variables from its outer function — even after the outer function has finished running.
function outermost(){
  let counter=0;
  return function innermost() {
    counter++;
    console.log(counter);
  }
}
let increment=outermost()
increment()
increment()
increment()
console.log(!false);
