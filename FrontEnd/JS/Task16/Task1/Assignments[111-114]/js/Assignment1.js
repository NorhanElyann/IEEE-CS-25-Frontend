let select3 = document.getElementById("select3");
for (let i = 16; i <= 30; i++) {
let option = document.createElement("option");
option.value = i; 
option.textContent = `${i}px`; 
select3.appendChild(option); 
}


let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let body = document.body;

if (window.localStorage.getItem("fontfamily")) {
    select1.value = window.localStorage.getItem("fontfamily");
    body.style.fontFamily = select1.value;
}

if (window.localStorage.getItem("color")) {
    select2.value = window.localStorage.getItem("color");
    body.style.color = select2.value;
}

if (window.localStorage.getItem("fontsize")) {
    select3.value = window.localStorage.getItem("fontsize");
    body.style.fontSize = `${select3.value}px`;
}

function changeStyles(){
    let selectedFont = select1.value;
    let selectedColor = select2.value;
    let selctedSize = select3.value;

    body.style.fontFamily = selectedFont;
    body.style.color = selectedColor;
    body.style.fontSize = `${selctedSize}px`;

    window.localStorage.setItem("fontfamily",selectedFont);
    window.localStorage.setItem("color",selectedColor);
    window.localStorage.setItem("fontsize",selctedSize);
} 


changeStyles();


select1.addEventListener("change" ,changeStyles)
select2.addEventListener("change" ,changeStyles)
select3.addEventListener("change" ,changeStyles)


