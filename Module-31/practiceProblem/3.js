const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = numbers.filter(number => number % 10 === 0);
const divisibleByTenWithFind = numbers.find(number => number % 10 === 0);
console.log(divisibleByTen);
console.log(divisibleByTenWithFind);
