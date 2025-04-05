let promptMsg = prompt("Print Number From – To", "Example: 5-20");
let numbers = promptMsg.split("-").map(num => parseInt(num));

console.log(numbers);
for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++){
    document.write(i + "<br>");
}
