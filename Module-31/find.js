const array = [1, 2, 3, 4, 5, 6];
const divisibleByTwo = array.find(element => element % 2 === 0);
console.log(divisibleByTwo);

const divisibleByThree = array.find(element => element % 3 === 0);
console.log(divisibleByThree);

const products = [
    {id: 1, name: 'laptop', price: 80000},
    {id: 2, name: 'mouse', price: 1000},
    {id: 3, name: 'phone', price: 120000},
    {id: 4, name: 'keyboard', price: 2000}
]

// const expensive = products.filter(element => element.id % 2 === 0);
const expensive = products.find(element => element.id % 2 === 0);
console.log(expensive);