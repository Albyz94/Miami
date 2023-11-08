const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const menuRouter = require("./routes/menuRoutes")
// const Pizza = require("./models/pizzas.js");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const pass = process.env.MONGODB_PASS;
const uri = "mongodb+srv://albyzeta:"+pass+"@nodetuts.bfsfj3y.mongodb.net/Menu"

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

// app.get("/menu" , async (req , res)=> {
//     try {
//         const pizzas = await Pizza.find({type:1});
//         const pizzasb = await Pizza.find({type:0});
//         res.render("menu" , {pizzas , pizzasb});
        
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Errore nel recupero delle pizze dal db");
//     }
// });

// app.get("/pizzas" , async (req , res) => {
//     res.redirect("/menu");
// });

app.use(menuRouter);

app.use(express.static("public"));

