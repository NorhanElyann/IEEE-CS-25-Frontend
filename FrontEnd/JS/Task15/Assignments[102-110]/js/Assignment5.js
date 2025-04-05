let div = document.querySelector("div");

function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(counter);
        window.open("https://elzero.org/","_blank", "width=400,height=400,left=200,top=10");
    }
}

let counter = setInterval(countdown, 1000);