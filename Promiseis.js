
// // syntax
// const promiseone=new Promise(function(resolve,reject){
//        setTimeout(() => {
//         console.log("Assynchronius task has completed");
//             resolve();
//        }, 1000); 

// })
// promiseone.then(function(){
//     console.log("Fsociety");

// });

// // we can also create a promise like this 
// new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("Hello world");
//         resolve();
//     },2000)
// }).then(function (){
//     console.log("Hello fsociety");
// })

// const promisetwo=new Promise(function(resolve,reject){
//        setTimeout(() => {
//         // passing an Object
//            resolve({firstname:"Hamza",LastName:"Khan"});
//            console.log("Data Transfer successfully");
//        }, 3000); 

// })
// let get=promisetwo.then(function(data){
//     console.log(data);
//     return data.LastName;
// });
// console.log(get);

// const promisethree=new Promise(function(resolve,reject){
//        setTimeout(() => {
//         // passing an Object
//         let error=true;
//         if(!error){
//             resolve({firstname:"Abu",LastName:"Ubaida"});
//             console.log("Data Transfer successfully");
//         }
//         else{
//             reject("ERROR 404!!!");
//         }
//        }, 3000); 

// })
// let get2=promisethree.then(function(data){
//     console.log(data);
//     return data.LastName;
// })
// .then(function(user){
//     console.log(user);

// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Finally promesis is resolved or rejected");

// })


// const promisefour=new Promise((resolve,reject)=>{
//     setInterval(()=>{
//         let check=false;
//         if(!check){
//             resolve({Department:"SE",UNI:"UIIT"});
//         }
//         else{
//             reject("ERROR 702");
//         }
//     },4000);
// });

// ================================ Async ===============================

// // promise all to combine all promises but here which one run first depend
// let getallpromise=Promise.all([promiseone,promisetwo,promisethree,promisefour]);
// getallpromise.then((resolve)=>{
//     console.log(resolve,"done");
// }).catch((error)=>{
//     console.log(error,"not done");
// })

// async function getdata() {
//     try{
//     const data=await promisefour
//     console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// getdata()

function param() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello world");
            
        },2000)
    })
}
async function fn() {
    let response=await param();
    console.log(response);
    
}
fn();


// ================================================== Fetch ====================================================

// We have two methods
// 1:
async function github() {
    try {
        const mydata = await fetch("https://api.github.com/users/Mr-hamzuu");
        console.log("Data Loading");
        
        const response = await mydata.json(); // if we not use await here then the output show Promise { <pending> }
        console.log(response);

    } catch (error) {
        console.log("E :", error);

    }
}
github()
// 2:
fetch("https://api.github.com/users/Mr-hamzuu")
    .then((response) => {
        console.log("Successfully logged");
        return response.json();
    }).then((get_response) => {
        console.log(get_response);
    }).catch((error) => {
        console.log("Err : ", error);

    })



