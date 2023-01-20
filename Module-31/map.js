// function doubleIt(numbers) {
    //     const newArray = [];
//     for (const number of numbers) {
//         const double = doubleItOld(number);
//         newArray.push(double);
//     }
//     return newArray;
// }


const numbers = [10, 52, 32, 13, 45];
function doubleItOld(num) {
        return num * 2;
    }
    
const getDouble = numbers.map(doubleItOld);
const makeDoubleDirect = numbers.map(x => x * 2);



// const newArray =  => x * 2;
console.log(getDouble);
console.log(makeDoubleDirect);

// very shortcut method
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);