// with for loop
const oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [];
for(const number of oddNumbers) {
    let sumOfOddNumbers = number + 1;
    evenNumbers.push(sumOfOddNumbers);
}
console.log(evenNumbers);


// with map function
const evenNumber = oddNumbers.map(odd => odd + 1);
console.log(evenNumber);