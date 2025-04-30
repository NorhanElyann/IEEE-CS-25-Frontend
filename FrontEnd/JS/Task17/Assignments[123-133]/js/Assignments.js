// Assignment 1

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2])

// -----------------------------------------------------------------------

// Assignment 2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log(Array.from(new Set(myFriends)).sort())
// console.log([...new Set(myFriends)].sort())

// -----------------------------------------------------------------------

// Assignment 3

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let infoMap = new Map(Object.entries(myInfo));

console.log(infoMap);
console.log(infoMap.size)
console.log(infoMap.has("role"))

// -----------------------------------------------------------------------

// Assignment 4

let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().join('')); //123

// -----------------------------------------------------------------------

// Assignment 5

let theName = "Elzero";
console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Object.assign([],theName));
console.log([...new Set(theName)]);
console.log(Object.values(theName));

// -----------------------------------------------------------------------

// Assignment 6

let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let numbers = chars.filter(item => typeof item === "number");
let letters = chars.filter(item => typeof item === "string");
let numbersCount =numbers.length;
let finalArray = numbers.concat(letters);
console.log(finalArray.copyWithin(0,numbersCount,numbersCount*2));

// -----------------------------------------------------------------------

// Assignment 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne , ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);

// -----------------------------------------------------------------------

// Assignment 8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(([...n1,...n2].length)* (Math.max(...n2)));

