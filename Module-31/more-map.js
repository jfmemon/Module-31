// map for number in array
const array = [1, 2, 3, 4, 5];
const half = array.map(element => element/2);
console.log(half); 

// map for string in array
const friends = ['Tom Hanks', 'Tom Crus', 'Jack', 'Leonardo', 'Johnny'];
const firstLetter = friends.map(element=>element.length);
console.log(firstLetter);

// map for object in array
const products = [
    {id: 1, name: 'laptop', price: 80000},
    {id: 2, name: 'mouse', price: 1000},
    {id: 3, name: 'phone', price: 120000},
    {id: 4, name: 'keyboard', price: 2000}
]
// console.log(products[0]);  for see just 1st element of products
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productName, productPrice);