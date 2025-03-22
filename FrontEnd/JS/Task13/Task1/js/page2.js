// Assignment 1
function getDetails(zName, zAge, zCountry) {
    
    function namePattern(zName) {
        var zName1 = "";
        var zName2 = "";
        for (var i = 0; i < zName.length; i++){
            zName1 += zName[i];
            if (zName[i] === " "){
                zName2 = zName[i+1].toUpperCase();
                break;
            }
        }
        return `${zName1}${zName2}.`;
    }

    function ageWithMessage(zAge) {
        var zAge1 =zAge[0]+zAge[1];
        return `Your Age Is ${zAge1}`;
    }

    function countryTwoLetters(zCountry) {
        var zCountry1 = zCountry.slice(0, 2).toUpperCase();
        return zCountry1;
    }

    function fullDetails() {
        console.log(`Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You live in ${countryTwoLetters(zCountry)} `);
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY




// ------------------------------------------------------------------------------
// Assignment 2

// function itsMe() {
//     return `Iam A Normal Function`;
// }
let itsMe = () => `Iam An Arrow Function`;
console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol,web,tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



// ------------------------------------------------------------------------------
// Assignment 3

// function checker(zName3) {
//     return function (status) {
//     return function (salary) {
//     return status === "Available" ? `${zName3}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
// };
// }

let checker = zName3 => status => salary =>status === "Available" ? `${zName3}, My Salary Is ${salary}` : `Iam Not Avaialble`;

  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble



// ------------------------------------------------------------------------------
// Assignment 4

function specialMix(...data) {
    let sum= 0;
    let found= false;
    for (let i=0; i<data.length; i++) {
        if (typeof data[i] ==="number"){
            sum += data[i];
            found = true;
        }else {
            let number = parseInt(data[i]);
            // if (typeof number === "number") is false because of typeof NAN is a "number"
            if (!isNaN(number)){
                sum += number;
                found = true;
            }
        }
    }
    return found ? sum : "All is strings"
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
