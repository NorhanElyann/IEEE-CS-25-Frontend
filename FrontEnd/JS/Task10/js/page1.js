
// Assignment 2
document.write("<h1 id='elzero'>Elzero</h1>")
document.getElementById('elzero').style.color = "blue";
document.getElementById('elzero').style.fontSize = "80px";
document.getElementById('elzero').style.fontWeight = "bold";
document.getElementById('elzero').style.textAlign = "center";
document.getElementById('elzero').style.fontFamily = "Arial";


// Assignment 3
console.log("%cElzero %cWeb %cSchool","color:red;font-size:40px;","color:green;font-size:40px;font-weight:bold","background-color:blue;font-size:40px;")


// Assignment 4
console.group("Group 1")
console.log("Message One")
console.log("Message Two")
console.group("Child Group")
console.log("Message One")
console.log("Message Two")
console.groupEnd()
console.group("Grand Child Group")
console.log("Message One")
console.log("Message Two")
console.groupEnd()
console.groupEnd()
console.group("Group 2")
console.log("Message One")
console.log("Message Two")
console.groupEnd()


// Assignment 5
let names = ["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"];
console.table(names);


// Assignment 6

console.error("Erroe!");
console.log("Iam In Console");
document.write("Iam In Page");