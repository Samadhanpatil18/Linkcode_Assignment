

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Expands arr1 into a new array
console.log(arr2); // [1, 2, 3, 4, 5]


const obj1 = { name: "John", age: 25 };
const obj2 = { ...obj1, city: "NY" }; // Copies obj1 properties
console.log(obj2); // { name: 'John', age: 25, city: 'NY' }

