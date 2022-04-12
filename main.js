/// Task 1

const _ = require('lodash');

const data1 = [
    {
        "age": 3,
        "name": "Curtis Greene",
        "email": "curtis.greene@zaj.ca",
    },
    {
        "age": 23,
        "name": "Nikki Lowe",
        "email": "nikki.lowe@darwinium.tv",
    },
    {
        "age": 39,
        "name": "Barr Copeland",
        "email": "barr.copeland@nipaz.me",
    },
];

const data2 = [
    {
        "age": 29,
        "name": "Calhoun Woodward",
        "email": "calhoun.woodward@medmex.info",
    },
    {
        "age": 21,
        "name": "Leta Lee",
        "email": "leta.lee@qnekt.com",
    },
    {
        "age": 40,
        "name": "James Dinh",
        "email": "j.dink@erw.com",
    }
];

let userIndexdata1 = _.findIndex(data1, ['age', 23]);
console.log(userIndexdata1);

let allArrayData = _.concat(data1, data2);
console.log(allArrayData);

let objArr = _.omit(data1[1], ["age"]);
console.log(objArr);

let superTask = data1[1];
// superTask.filter()
let result = {};
Object.keys(superTask).map(item => {
    if (item !== "age") {
        result[item] = superTask[item];
    }
})
console.log(result)


/// Task 2

const str = "abcdefg";
console.log(str[2] + str[0] + str[1] + str[1] + str[0] + str[6] + str[4]);

const arr = [1, 2, 3];

console.log(arr[1], arr[2])

const obj = {
    one: "X",
    two: "Y",
    three: "Z"
}

const person = {
    age: 30,
    name: "Vladilen",
    sayHi: () => {
        console.log("Hi I'm Vladilen and I'm 30")
    }
}

