const myContainer = [2, 3, 4, 5, 6, 7, 8, 9];

const output = myContainer.filter(value => {
    const result = value >5;
    return result;
})
console.log(output);