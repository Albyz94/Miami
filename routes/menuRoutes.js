const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController")

router.get("/pizzas" , async (req , res) => {
    res.redirect("/menu");
});

router.get("/menu" , menuController.menu);
// {
    // try {
    //     const pizzas = await Pizza.find({type:1});
    //     const pizzasb = await Pizza.find({type:0});
    //     res.render("menu" , {pizzas , pizzasb});
        
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send("Errore nel recupero delle pizze dal db");
    // }
    
// });

module.exports = router;