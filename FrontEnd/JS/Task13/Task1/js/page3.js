// Assignment 1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// Elzero

let mixmap = mix.map(function(ele){
    return isNaN(ele) ? ele : "";
}).reduce(function(acc, cur){
    return `${acc}${cur}`;
});
console.log(mixmap);

// ------------------------------------------------------------------------------------------------

// Assignment 2

let myString = "EElllzzzzzzzeroo";
// Elzero

let myStringfilter = myString.split("").filter(function(ele,i,arr){
    return (arr.indexOf(ele) === i)
}).join("");
console.log(myStringfilter);

// ------------------------------------------------------------------------------------------------

// Assignment 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];
// Elzero

let myArrayreduce = myArray.reduce(function(acc,cur){  
    return `${acc}${Array.isArray(cur) ? cur.join("") : cur}`;
});
console.log(myArrayreduce);

// ------------------------------------------------------------------------------------------------

// Assignment 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// [-1, -10, 10, 20, -5, -3]

let numsfilter = numsAndStrings.filter(function(ele){
    return (!isNaN(ele))
}).map(function(ele){
    return -ele
});
console.log(numsfilter);

// ------------------------------------------------------------------------------------------------

// Assignment 5
let nums = [2, 12, 11, 5, 10, 1, 99];
// 500

let numsreduce = nums.reduce(function(acc, cur){
    return  (cur % 2 !== 0 ? acc + cur : acc * cur);
},1);
console.log(numsreduce);