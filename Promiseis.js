
// syntax
const promiseone=new Promise(function(resolve,reject){
       setTimeout(() => {
        console.log("Assynchronius task has completed");
            resolve();
       }, 1000); 
        
})
promiseone.then(function(){
    console.log("Fsociety");
    
});

// we can also create a promise like this 
new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Hello world");
        resolve();
    },2000)
}).then(function (){
    console.log("Hello fsociety");
})

const promisetwo=new Promise(function(resolve,reject){
       setTimeout(() => {
        // passing an Object
           resolve({firstname:"Hamza",LastName:"Khan"});
           console.log("Data Transfer successfully");
       }, 3000); 
        
})
let get=promisetwo.then(function(data){
    console.log(data);
    return data.LastName;
});
console.log(get);

const promisethree=new Promise(function(resolve,reject){
       setTimeout(() => {
        // passing an Object
        let error=true;
        if(!error){
            resolve({firstname:"Abu",LastName:"Ubaida"});
            console.log("Data Transfer successfully");
        }
        else{
            reject("ERROR 404!!!");
        }
       }, 3000); 
        
})
let get2=promisethree.then(function(data){
    console.log(data);
    return data.LastName;
})
.then(function(user){
    console.log(user);
   
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Finally promesis is resolved or rejected");
    
})


const promisefour=new Promise((resolve,reject)=>{
    setInterval(()=>{
        let check=true;
        if(!check){
            resolve({Department:"SE",UNI:"UIIT"});
        }
        else{
            reject("ERROR 702");
        }
    },4000);
});
async function getdata() {
    try{
    const data=await promisefour
    console.log(data);
    }catch(error){
        console.log(error);
    }
    
}
getdata()