document.querySelector("#button1").addEventListener("click", getTextFile)
document.querySelector("#button2").addEventListener("click", getJSON)
document.querySelector("#button3").addEventListener("click", getApi)

function getTextFile() {
    fetch("textfile.txt").then(response => response.text()).then(data => {
        document.getElementById("output").innerHTML += data;
    });
}

function getJSON() {
    fetch("article.json").then(response => response.json()).then(articles => {

        let output = "<ul>";
        
        articles.forEach(function(article){

            output == `<li>Baslik ${article.title}  - Icerik ${article.body}</li>`

        });

        document.getElementById("output").innerHTML += output;

    });
    
}

function getApi() {
    fetch("https://api.github.com/users").then(response => response.json()).then(users => {
        
        let output = "<ul>";
        
        users.forEach(function(user){

            output == `<li>Kullanici adi: ${user.login}</li>`;

        });

        document.getElementById("output").innerHTML += output;

    });
    
}