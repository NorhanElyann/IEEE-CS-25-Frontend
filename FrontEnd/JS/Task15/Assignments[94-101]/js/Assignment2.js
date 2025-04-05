// Assingment 2

let elementForm = document.createElement('form');

let elementInputone = document.createElement('input');
elementInputone.id = 'inputone';
elementInputone.type = 'text';
elementInputone.placeholder ="Add Classes"

let elementInputtwo = document.createElement('input');
elementInputtwo.id = 'inputtwo';
elementInputtwo.type = 'text';
elementInputtwo.placeholder ="Remove Classes"

elementForm.appendChild(elementInputone);
elementForm.appendChild(elementInputtwo);

let currentElement = document.createElement('div');
currentElement.textContent ="Current Element"

let divPar = document.createElement('div');
let elementParone = document.createElement('p');
elementParone.textContent ="Current Element Class Lists"
let elementPartwo = document.createElement('p');
divPar.appendChild(elementParone);
divPar.appendChild(elementPartwo);
elementInputone.onblur = function() {
    let classesToAdd = elementInputone.value.trim().toLowerCase().split(" ");
    for (let i = 0; i < classesToAdd.length; i++) {
        if (classesToAdd[i] !== "") { 
            currentElement.classList.add(classesToAdd[i]); 
        }
    }
    elementPartwo.textContent = classcurrent();
    elementInputone.value = "";
}
elementInputtwo.onblur = function() {
    let classesToDelete = elementInputtwo.value.trim().toLowerCase().split(" ");
    for (let i = 0; i < classesToDelete.length; i++) {
        if (classesToDelete[i] !== "") { 
            currentElement.classList.remove(classesToDelete[i]); 
        }
    }
    elementPartwo.textContent = classcurrent();
    elementInputtwo.value = "";
}

function classcurrent() { 
    let classes = [...currentElement.classList].sort();
    if(currentElement.classList.length === 0)
        return "No Classes To Show"
    else
        return classes.join(" ");
}
elementPartwo.textContent = classcurrent();

elementForm.style.cssText = "display: flex; margin: 10px;";
elementInputone.style.cssText = "width: 100%; flex: 1; margin-right: 10px;";
elementInputtwo.style.cssText = "width: 100%; flex: 1;";
currentElement.style.cssText = "background-color: #E0E0E0; padding: 20px; margin: 10px; text-align: center;";
divPar.style.cssText = "background-color: #E0E0E0; margin: 10px; padding : 20px;"
elementPartwo.style.cssText = "text-align: center ";





document.body.appendChild(elementForm);
document.body.appendChild(currentElement);
document.body.appendChild(divPar);

