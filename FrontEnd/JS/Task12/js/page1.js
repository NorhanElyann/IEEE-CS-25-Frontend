// Assignment 1
// Test Case 1
let num=20;

if(num < 10 ){
    console.log(`00${num}`)
}else if (num > 10 && num < 100){
    console.log(`0${num}`)
}else {
    console.log(`${num}`)
}


// Assignment 2
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log(`${num1} Is The Same Value As ${str}`);
}

if (num1 === str) {
    console.log(`${num1} Is The Same Value As ${str} And The Same Type`);
} else if (num1 == str && typeof num1 !== typeof str) {
    console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
}

if (num1 !== str2 && typeof num1 !== typeof str2) {
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
}

if (str !== str2 && typeof str === typeof str2) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}


// Assignment 3
let num_1 = 10;
let num2 = 30;
let num3 = "30";

if (( num3 > num_1 && typeof num3 !== num2 )
    && (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2)
    && (num3 !== num1 && typeof num3 !== typeof num1 && typeof num3 !== typeof num2))
    {
        {
        console.log(`${num3} Is Larger Than ${num1} And Type string Not The Same Type As number
${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number
${num3} Value And Type Is Not The Same As ${num_1} And Type Is Not The Same As ${num2}`)
        }
    }


// Assignment 4  
// Edit What You Want Here

let num10 = 11;
let num20 = 3;
let num30 = 11;
let num40 = 40;

/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1

if (num10 > num20) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num10 > num20 && num10 < num40) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num10 > num20 && num10 === num30) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num10 + num20) < num40) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num10 + num30) < num40) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num10 + num20 + num30) < num40) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num40 - (num10 + num30) + num20 === 21) {
    console.log("True");
} else {
    console.log("False");
}