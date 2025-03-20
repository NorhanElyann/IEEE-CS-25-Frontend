// Assignment 1
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += start) {
    if (i === exclude) continue;
    console.log(i);
    
}


// Assignment 2
let start2 = 10;
let end2 = 0;
let stop = 3;

// Output
for (let i = start2; i >= end2; i--){
    if (i < start2) 
        console.log("0" + i);
    else
        console.log(i);

    if (i === stop) break;
}


// Assignment 3
let start3 = 1;
let end3 = 6;
let breaker = 2;
for (let i = start3; i <= end3; i++) {
    console.log(i);
    for (let j = breaker; j<=breaker+breaker ; j += breaker) {
        console.log('--',j); 
    }
}


// Assignment 4
let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    if (index === jump+jump) break;
    index -= jump;
    
}


// Assignment 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = friends.indexOf("Ahmed")+1;

for(let i = friends.indexOf("Ahmed"); i < friends.length; i++) {
    if (friends[i][friends.indexOf("Ahmed")] === letter.toUpperCase()) continue;
    else {
        console.log(`"${count} => ${friends[i]}"`);
        count++;    
    }
}


// Assignment 6
let start6 = 0;
let swappedName = "elZerO";
let final = "";

for(let i =start6 ; i<swappedName.length ; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase())
        final += (swappedName[i].toUpperCase());
    else {
        final += (swappedName[i].toLowerCase());
    }
}
console.log(final);


// Assignment 7
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = start7; i < mix.length; i++) {
    if (typeof mix[i] === "number" && mix[i] !== mix[start7]) {
        console.log(mix[i]);
    }
}











