const arrayObject = [
    {name: "atiq", age:24},
    {name: "labiba", age: 20}
];

// const output = arrayObject.map(value => value.name)
// console.log(output);

const ids = arrayObject.filter(value => value.age > 20);
console.log(ids);