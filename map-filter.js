// for ES5

// const myContainer = [2, 3, 4, 5, 6, 7, 8, 9];
// const myNewContainer = [];

// for (let i = 0; i < myContainer.length; i++) {
//     const element = myContainer[i];
//     const result = element * element;
//     myNewContainer.push(result);
//     console.log(myNewContainer);
// }

// using map
const myContainer = [2, 3, 4, 5, 6, 7, 8, 9];
const result = myContainer.map(function(value){
    return value*value;
});
console.log(result);