
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