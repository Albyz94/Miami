const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({extended: false}));


app.get("/" , (req , res) => {
    
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(3000 , (req , res) => {
    console.log("server started on port 3000");
});

