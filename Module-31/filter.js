const numbers = [1, 2, 3, 4, 5, 6];
const divisibleByTwo = numbers.filter(element => element % 2 === 0);
console.log(divisibleByTwo);

const names = ['Jack', 'Tom', 'Alisa', 'Bush'];
const divisible = names.filter(element => element.length % 2 === 0);
console.log(divisible);

const products = [
    {id: 1, name: 'laptop', price: 80000},
    {id: 2, name: 'mouse', price: 1000},
    {id: 3, name: 'phone', price: 120000},
    {id: 4, name: 'keyboard', price: 2000}
]

const cheap = products.filter(product => product.price < 30000);
console.log(cheap);