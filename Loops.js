
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