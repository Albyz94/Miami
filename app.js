const express = require("express");
const bodyParser = require("body-parser");
const Pizza = require("./models/pizzas.js");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const uri = "mongodb+srv://albyzeta:1234@nodetuts.bfsfj3y.mongodb.net/Menu"

mongoose.connect(uri).then(()=> {
    app.listen(3000 , (req , res)=> {
        console.log("connected and listening on 3000");
    })
})
.catch((err)=>{
    console.log(err);
});

app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine" , "ejs");

app.get("/" , (req , res) => {
    // res.sendFile(__dirname + "/public/index.html");
    res.render("index");
});

app.get("/menu" , async (req , res)=> {
    try {
        const pizzas = await Pizza.find();
        res.render("menu" , {pizzas});
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nel recupero delle pizze dal db");
    }
});

app.get("/pizzas" , async (req , res) => {
    const pizzas = await Pizza.find();
    res.json(pizzas);
});

app.use(express.static("public"));

