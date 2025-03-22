// Problem 1
function triArea(base, height) {
	return  (base * height) / 2;
}

// -------------------------------------------------------------------

// Problem 2
function addUp(num) {
	return (num * (num + 1)) /2
}

// -------------------------------------------------------------------

// Problem 3
function matchHouses(step) {
	return step === 0 ? 0 : 1 + step*5;
}

// -------------------------------------------------------------------

// Problem 4
function minMax(arr) {
	let min=arr[0],max=[0];
	for(let i=1;i<arr.length;i++) {
		if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
	}
	return [min,max];
}

// -------------------------------------------------------------------

// Problem 5
function sevenBoom(arr) {
	let string = arr.join("");
	if(string.includes("7")){
		return "Boom!";
	}
	else {
		return "there is no 7 in the array";
	}
}