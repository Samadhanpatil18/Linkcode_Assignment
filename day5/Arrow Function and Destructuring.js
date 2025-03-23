const hello = () => {
    console.log('hi');
    return 20;
}

const [b, a] = [10, hello()];  // Destructuring and calling hello()
console.log(b);  // Output: 10
console.log(b); 