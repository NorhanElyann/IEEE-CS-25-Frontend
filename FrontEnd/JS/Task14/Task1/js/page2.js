// Assignment 1
document.querySelector("#elzero");
document.querySelector(".element");
document.querySelector("[name='js']");
document.querySelector("div")[0];
document.querySelectorAll("#elzero")[0];
document.querySelectorAll(".element")[0];
document.querySelectorAll("[name='js']")[0];
document.querySelectorAll("div")[0];
document.getElementById("elzero");
document.getElementsByClassName("element")[0];
document.getElementsByTagName("div")[0];
document.getElementsByName("js")[0];
document.body.children[0];
document.body.firstElementChild;

// ------------------------------------------------------------------------------------------------
// Assignment 2
// let images = document.querySelectorAll("img");
// for (let i = 0; i < images.length; i++) {
//     images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     images[i].alt = "Elzero Logo";
// }

// ------------------------------------------------------------------------------------------------
// Assignment 3
let dollar = document.querySelector("input[name='dollar']");
let resultdiv = document.querySelector(".result");

function convert() {
    let dollarvalue = dollar.value;
    if(!isNaN(dollarvalue) && dollarvalue !== "") {
        let egpValue = (dollarvalue * 15.6).toFixed(2);
        resultdiv.textContent = `${dollarvalue} USD Dollar = ${egpValue} Egyptian Pound`;
    } else {
        resultdiv.textContent = "{0} USD Dollar = {0} Egyptian Pound";
    }
}
dollar.addEventListener("input", convert);

// ------------------------------------------------------------------------------------------------
// Assignment 4
let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");


let textContenttwo = divOne.textContent + " 2";
let textContentone = divTwo.textContent;
let titletwo = divOne.getAttribute("title");
let titleone = divTwo.getAttribute("title");


divTwo.textContent = textContenttwo;
divTwo.setAttribute("title", titletwo);


divOne.textContent = textContentone;
divOne.setAttribute("title", titleone);

// ------------------------------------------------------------------------------------------------
// Assignment 5
let images5 = document.querySelectorAll("img");

for (let i = 0; i < images5.length; i++) {
    if (images5[i].hasAttribute("alt")) {
        images5[i].setAttribute("alt", "Old"); 
    } else {
        images5[i].setAttribute("alt", "Elzero New"); 
    }
}

// ------------------------------------------------------------------------------------------------
// Assignment 6
document.getElementById("elementForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

const numberOfElements = document.querySelector('input[name="elements"]').value;
const elementText = document.querySelector('input[name="texts"]').value;
const elementType = document.querySelector('select[name="type"]').value;
const resultsDiv = document.querySelector('.results');

resultsDiv.innerHTML = '';

for (let i = 1; i <= numberOfElements; i++) {
    const newElement = document.createElement(elementType); 
    newElement.classList.add('box');
    newElement.id = `id-${i}`;
    newElement.setAttribute('title', 'Element');
    newElement.textContent = elementText;

    newElement.style.border = "1px solid #ccc";
    newElement.style.backgroundColor = "orange";
    newElement.style.margin = "5px";
    newElement.style.padding = "10px";
    newElement.style.width = "20px";
    newElement.style.display = "inlineBlock";

    resultsDiv.appendChild(newElement); 
}
});




