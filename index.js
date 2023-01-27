console.log("Hello");

let newsdata = {};
const apiactivate = () =>{
    fetch(
        `https://api.thenewsapi.com/v1/news/top?api_token=bhbnQy1PnjlwPLgjQ2xsmOdM5JVe8ZiA1BPWuuZo&locale=us&limit=3`,
    )
    .then((response) => response.json())
    .then((data) => {
        newsdata = data;
        const body = document.querySelector(".content");
        const child = document.createElement("h1");
        child.innerText = newsdata.data[0].title;
        body.appendChild(child);
    });
}