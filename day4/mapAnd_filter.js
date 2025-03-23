
// 4. map() vs filter()

const numbers = [1, 2, 3, 4];
console.log(numbers.map(num => num * 2)); // [2, 4, 6, 8] (modifies all elements)
console.log(numbers.filter(num => num > 2)); // [3, 4] (filters based on condition)