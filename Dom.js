document.getElementById("id");
document.getElementById("id").id;//For getting id name
document.getElementById("id").className;//For getting class name
document.getElementById("id").setAttribute("class", "firstclass"); //It will change the class name to firstclass
const first = document.getElementById("id");
first.style.backgroundColor = "gray"; //it will change the background color of id "id"

const tag = document.getElementsByTagName("h1");
tag[0].style.color = "purple";
tag[0].style.padding = "23px"


first.textContent;//It will show all the textin the first class , if there is another tag in that class and it use display none style this property also show that text
first.innerText;//It will show only the text that is available 

document.querySelector("div")

const temp = document.getElementsByClassName('list');
const convert = Array.from(temp);
convert.forEach((n) => {
    n.style.color = "white";
    n.style.padding = "6px";
})

const parent = document.querySelector('.parent');
console.log(parent);
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerText);
}

console.log(parent.children[2].innerText);
console.log(parent.children[1].style.backgroundColor = 'black');

const child = document.querySelector('.child');
console.log(child.parentElement);
console.log(child.nextElementSibling.innerText);
console.log(child);

console.log(parent.childNodes);

// Creating a div element
const div = document.createElement('div');
div.className = 'myclass';
div.id = Math.round(Math.random() + 1);
div.setAttribute("title", "newdiv");
div.style.color = "white";

div.innerHTML = "hello world<br>";
const text = document.createTextNode("My name  is hamza");
div.appendChild(text);

// for showing this div in body we use 
document.body.appendChild(div)
console.log(div);


// practice

const color = ["red", "blue", "pink", "green", "orange"];
for (let i = 0; i < parent.children.length; i++) {
    parent.children[i].style.backgroundColor = color[i];
}

