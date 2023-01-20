const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Shucorita', age: 22},
]

// with for loop
let sum = 0;
for(const member of people) {
    let membersAge = member.age;
    sum = sum + membersAge;
}
console.log(sum);

// with reduce function
const addWithReduce = people.reduce((previousAge, currentAge) => previousAge + currentAge.age, 0);
console.log(addWithReduce);
