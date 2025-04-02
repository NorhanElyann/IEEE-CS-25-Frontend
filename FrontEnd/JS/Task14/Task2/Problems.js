// Problem 1
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// ------------------------------------------------------------------------------------------------
// Problem 2
function getAbsSum(arr) {
    return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}

// ------------------------------------------------------------------------------------------------
// Problem 3
function possibleBonus(a, b) {
    return b - a >= 1 && b - a <= 6; 
}

// ------------------------------------------------------------------------------------------------
// Problem 4
function isOmnipresent(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(val)) {
            return false;
        }
    }
    return true;
}

// ------------------------------------------------------------------------------------------------
// Problem 5
function squareDigits(n) {
    return parseInt(n.toString().split('').map(num => Math.pow(num, 2)).join(''));
}

// ------------------------------------------------------------------------------------------------
// Problem 6
function consecutiveSum(n) {
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        let sum = 0;
        for (let j = i; sum < n; j++) {
            sum += j;
            if (sum === n) {
                return true;
            }
        }
    }
    return false;
}




