const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const uri = "mongodb+srv://albyzeta:1234@nodetuts.bfsfj3y.mongodb.net/Menu";
const pass = process.env.MONGODB_PASS;
const uri = "mongodb+srv://albyzeta:"+pass+"@nodetuts.bfsfj3y.mongodb.net/Menu"
mongoose.connect(uri)

const pizza = new Schema ({
    name: String,
    ingr: String,
    price: String,
    type: Number,
    pos: Number
});

const Pizza = mongoose.model("Pizza" , pizza);
// const pizza = new Schema{
// 	"name": String,
// 	"ingr": String,
// 	"price": String
// }

module.exports = Pizza;