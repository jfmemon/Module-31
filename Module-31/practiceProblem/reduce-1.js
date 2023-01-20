// with for loop
const numbers = [1, 9, 17, 22];
let sum = 0;
for(const number of numbers) {
    sum = sum + number;
}
console.log(sum);


// with reduce function
const reduceNumbers = numbers.reduce((previousNumber, currentNumber) => previousNumber + currentNumber, 0);
console.log(reduceNumbers);