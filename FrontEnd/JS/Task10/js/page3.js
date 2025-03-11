// Assignment 1
console.log(10 * 20 * 15 * 3 * 190 % 10 * 400); 


// Assignment 2
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num*num - num); // 6

// Soultion Three
console.log(num* (true+true)); // 6

// Soultion Four
console.log(num += num); // 6

// Solution Five
console.log(++num + true + true); 

// Solution Six
console.log(num += true+true+true); // 6


// Assignment 3
let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(+num2* (true+true)); // 20

// Solution Three
console.log((+num2 * +num2) -((true+true+true+true)*(+num2 + +num2)));

// Solution Four
console.log((--num2 + ++num2 +true)); // 20


// Assignment 4
let points = 10;

points += true+true+true; 
console.log(points); // 13

points -= true+true+true+true+true;
console.log(points); // 8;