// const arr =[1, 2, 3, 0, 4, 5]

// console.log(arr);

// const newArr = arr.filter((elem) => {    // filter with match condition

//     return elem > 2;  // condition should be based on the element value
// });

// console.log(newArr);

// console.log("=============================");

// console.log(true == 1); // true because 1 is truthy

// ===============================================================

// const arr =[1,2,3,4,5,6,7,8,9,]

// const newArr = arr.map((elem) => {   // to modify each element
//     return elem * 10;
// });

// console.log(newArr);

// ===============================================================

// const arr =[0,1,2,3,4,5,6]

// const newArr = arr.slice(3, 6);  // Extracts part of the array (non-mutating)
// console.log(newArr);

// ===============================================================

// const arr =[0,1,2,3,4,5,6]

// const newArr = arr.splice(1,2);  // Modifies array and removes elements
// console.log('new array ', newArr);
// console.log(arr);

// ===============================================================

// const test = (...param) => {
//     console.log(param);      // Rest parameter stores all arguments as an array
// };

// test(1, 2, 3, 4, 5);

// ===============================================================

// const hello = () => {
//     console.log('hello world');
// };

// hello(); // Calling function

// ===============================================================

// const hello = () => {
//     console.log('hello world');
// };

// const test = () => {
//     return hello; // Returning function reference
// };

// console.log(test()()); // Calls the returned function

// ===============================================================

// const student = {
//     name: "samadhan",
//     age: 27,
//     add: {
//         city: "pune"
//     },
//     getName: function () {   // object creation with key value method
//         return this.name;
//     }
// };

// console.log(student.add);
// console.log(student.getName());

// ===============================================================




// 1. Spread Operator (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Expands arr1 into a new array
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { name: "John", age: 25 };
const obj2 = { ...obj1, city: "NY" }; // Copies obj1 properties
console.log(obj2); // { name: 'John', age: 25, city: 'NY' }

// 2. Slice vs Splice
const arr = [0, 1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); // [1, 2, 3] (extracts, no change in original)
console.log(arr.splice(1, 3, 99, 100)); // Removes [1,2,3], adds 99,100
console.log(arr); // Modified array

// 3. let, const, var
var x = 10; // Function-scoped, can be redeclared
let y = 20; // Block-scoped, cannot be redeclared
const z = 30; // Constant, cannot be reassigned

// 4. map() vs filter()
const numbers = [1, 2, 3, 4];
console.log(numbers.map(num => num * 2)); // [2, 4, 6, 8] (modifies all elements)
console.log(numbers.filter(num => num > 2)); // [3, 4] (filters based on condition)

// 5. Normal Function vs Arrow Function
function normalFunc() {
    return "Hello";
}
const arrowFunc = () => "Hello";
console.log(normalFunc(), arrowFunc());

// Arrow function doesn't have its own 'this'
const obj = {
    value: 10,
    normal() { console.log(this.value); }, // 'this' refers to obj
    arrow: () => console.log(this.value) // 'this' refers to outer scope
};
obj.normal(); // 10
obj.arrow(); // undefined (in strict mode)