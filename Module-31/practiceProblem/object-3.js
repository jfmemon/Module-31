const peopleInformation = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

console.log(peopleInformation.email);   // console the value of email
console.log(peopleInformation.address);   // console the value of address
console.log(peopleInformation.address.city);   // console the value of city of address
console.log(peopleInformation.address.geo.lat);   // console the value of lat of geo of address
console.log(peopleInformation.company.name);   // console the value of name of company
