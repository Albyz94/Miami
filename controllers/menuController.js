// menu
const Pizza = require("../models/pizzas.js");

const menu = async (req , res)=>{
    try {
        const pizzas = await Pizza.find({type:1});
        const pizzasb = await Pizza.find({type:0});
        res.render("menu" , {pizzas , pizzasb});
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nel recupero delle pizze dal db");
    }
};

module.exports = {
    menu
}