// Assignment 1

class Car{
    constructor(name,model,price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return 'Car Is Running Now';  
    }
    stop(){
        return 'Car Is Stopped';
    }
}

let carOne = new Car("Toyota",2020,450000);
let carTwo = new Car("Hyundai",2022,650000);
let carThree = new Car("Kia",2024,850000);

console.log(`Car One Name is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());

// --------------------------------------------------------------------------------------------------------
// Assignment 2

class Phone {
    constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
}
}

// Write Tablet Class Here
class Tablet extends Phone{
    constructor(name, serial, price,size){
        super(name, serial, price);
        this.size = size || "UnKnown";
    }
    fullDetails(){
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// --------------------------------------------------------------------------------------------------------
// Assignment 3

// Edit The Class
class User {
    #c;
    constructor(username, card) {
    this.u = username;
    this.#c = card;
    }
    creditCard(){
        return this.#c.toString().match(/\d{4}/g).join("-");
    }
    get showData(){
        return `Hello ${this.u} Your Credit Card Number Is ${this.creditCard()}`
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

// --------------------------------------------------------------------------------------------------------
// Assignment 4

// Write Your Code Here

String.prototype.addLove = function(){
    return "I Love Elzero Web School";
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// --------------------------------------------------------------------------------------------------------
// Assignment 5

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here

Object.defineProperty(myObj , "score",{
    writable: false
});

Object.defineProperty(myObj , "id",{
    enumerable : false
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}