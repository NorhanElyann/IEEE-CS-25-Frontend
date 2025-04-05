let paragraph = document.querySelector("p");
let ourElement = document.querySelector(".our-element");

paragraph.remove();

let startDiv = document.createElement("div");
startDiv.className = "start";
startDiv.setAttribute("title", "Start Element");
startDiv.setAttribute("data-value", "Start");
startDiv.textContent = "Start";

let endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.setAttribute("title", "End Element");
endDiv.setAttribute("data-value", "End");
endDiv.textContent = "End";

ourElement.parentNode.prepend(startDiv);
ourElement.parentNode.append(endDiv);
