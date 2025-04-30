// Assignment 1

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipdateRegg = /(\d+|\D+)+/ig;
console.log(ip.match(ipdateRegg));

// ---------------------------------------------------------------------------
// Assignment 2

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesdateRegg = /os\d*o/ig;
console.log(specialNames.match(specialNamesdateRegg))

// ---------------------------------------------------------------------------
// Assignment 3

let phone = "+(995)-123 (4567)";
let phonedateRegg = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(phonedateRegg));

// ---------------------------------------------------------------------------
// Assignment 4

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
https? :Means http or https The s? makes the s optional.
:// : use \/ to escape the slashes.
(?:[-\w]+\.)? : Matches subdomains like www. which adateReg made of letters, numbers, or -, followed by a dot .
([-\w]+) : Matches the letters or numbers.
\. : dot.
\w+ : any eltters or numbers.
(?:\.\w+)? :dot with any letters or numbers The ? makes it optional.
.* : Matches any number of any characters.
i : flag makes the pattern case-insensitive.

*/

// ---------------------------------------------------------------------------
// Assignment 5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dateReg = /\d{2}\s?-?\s?\/?\d{2}\/?\s?-?\s?\d{2,4}/; // Write Pattern HedateReg

console.log(date1.match(dateReg)); // "25/10/1982"
console.log(date2.match(dateReg)); // "25 - 10 - 1982"
console.log(date3.match(dateReg)); // "25 10 1982"
console.log(date4.match(dateReg)); // "25 10 82"

// ---------------------------------------------------------------------------
// Assignment 6

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let urlReg = /(https?:\/\/)?(www\.)?elzero\.org.*/i; // Write Your Pattern Here

console.log(url1.match(urlReg));
console.log(url2.match(urlReg));
console.log(url3.match(urlReg));
console.log(url4.match(urlReg));
console.log(url5.match(urlReg));
