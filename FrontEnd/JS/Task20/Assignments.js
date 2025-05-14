let request = new XMLHttpRequest();

request.open("GET", "articles.json");

//Assignment 2

// request.onreadystatechange = function () {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText);
//     }
//     request.onload = function () {
//         console.log("Data Loaded")
//     }

// };

request.send();


//Assignment 3&4

request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);

        let mainData = JSON.parse(request.responseText);

        let div = document.createElement("div");
        div.id = "data";

        mainData.forEach((article) => {
            article.category = "All";

            let articleDiv = document.createElement("div");

            articleDiv.innerHTML = `
                <h2>Title: ${article.title}</h2>
                <p>Author: ${article.author}</p>
                <p>Article Number ${article.id} </p>
                <p></p>content: ${article.content}</p>
                <p>Category: ${article.category}</p>
            `;

            div.appendChild(articleDiv);
        });

        document.body.appendChild(div);

        console.log("mainData:", mainData);

        let updatedData = JSON.stringify(mainData);

        console.log("updatedData:", updatedData);
    }
};
