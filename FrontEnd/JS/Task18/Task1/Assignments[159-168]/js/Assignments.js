// Assignment 1 

let dateNow = new Date();
let birthDay = new Date("septemper 15, 2004")
let dateDiff = dateNow - birthDay;

let diffSeconds = Math.floor(dateDiff / 1000);
let diffMinutes = Math.floor(diffSeconds / 60);
let diffHours = Math.floor(diffMinutes / 60);
let diffDays = Math.floor(diffHours / 24);
let diffMonths = Math.floor(diffDays / 30); 
let diffYears = Math.floor(diffDays / 365); 

console.log(`${diffSeconds} Seconds`);
console.log(`${diffMinutes} Minutes`);
console.log(`${diffHours} Hours`);
console.log(`${diffDays} Days`);
console.log(`${diffMonths} Months`);
console.log(`${diffYears} Years`);

// ----------------------------------------------------------------------------------------
// Assignment 2

dateNow.setFullYear(1980,0,1);
dateNow.setHours(0);
dateNow.setMinutes(0);
dateNow.setSeconds(1);

console.log(dateNow);

// ----------------------------------------------------------------------------------------
// Assignment 3
let dateNow3 = new Date();
dateNow3.setDate(0);
console.log(dateNow3);

let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let previousMonth = monthNames[dateNow3.getMonth()];

console.log(`Previous Month Is ${previousMonth} And Last Day Is ${dateNow3.getDate()}`)

// ----------------------------------------------------------------------------------------
// Assignment 4

let date1 = new Date("9-15-2004");
console.log(date1);

let date2 = new Date(Date.parse("Sep 15 2004"))
console.log(date2);

let date3 = new Date(2004,8,15);
console.log(date3);

// ----------------------------------------------------------------------------------------
// Assignment 5

// let start =performance.now();
// for (let i=0 ; i<100000 ; i++){
//     console.log(i);
// }
// let end = performance.now();

// let duration = Math.floor(end - start);

// console.log(`loop took ${duration} milliseconds`);

// ----------------------------------------------------------------------------------------
// Assignment 6

function* gen(){
    let  i = 14;
    let count = 0;
    while(true){
        yield i ;
        i = i +140+(200*count);
        count++;
    }
}

// Write Your Generator Function Here

let generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// ----------------------------------------------------------------------------------------
// Assignment 7

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll(){
    yield* new Set(genNumbers());
    yield* new Set(genLetters());

}

let generator7 = genAll();


console.log(generator7.next()); // {value: 1, done: false}
console.log(generator7.next()); // {value: 2, done: false}
console.log(generator7.next()); // {value: 3, done: false}
console.log(generator7.next()); // {value: 4, done: false}
console.log(generator7.next()); // {value: 5, done: false}
console.log(generator7.next()); // {value: "A", done: false}
console.log(generator7.next()); // {value: "B", done: false}
console.log(generator7.next()); // {value: "C", done: false}
console.log(generator7.next()); // {value: "D", done: false}

// ----------------------------------------------------------------------------------------
