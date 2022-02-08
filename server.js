//servidor
const express = require('express');
//instanciando
const app = express();
//passando com oque vamos trabalhar
app.set("view engine", "ejs");

//passando a rota
app.get("/", function(req, res) {
    //mocando dados
    const items = [{
        title: "D",
        message: "esenvolver aplicações"
    },
    {
        title: "E",
        message: "js usa javascript para renderizar Html"
    },
    {
        title: "M",
        message: "uito facil de usar"
    },
    {
        title: "A",
        message: "morzinho"
    },

    {
        title: "I",
        message: "nstall ejs"
    },

    {
        title: "S",
        message: "intaxe simples"
    },
]
const subtitle = "uma linguagem de modelagem para criação HTML"

    //oque sera passado para a rota
    res.render('pages/index', {qualitys:items, subtitle:subtitle,})
})

app.get('/sobre', function(req, res) {
    res.render("pages/about")
})
//porta que vai rodar
app.listen(8080)
console.log("Rodando!")