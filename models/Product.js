const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please provide a name"],
    },
    price: {
        type: Number,
        require: [true, "Please provide a price"],
    },
    image: {
        type: String,
        require: [true, "Please provide a image url"],
    }
});


module.exports = mongoose.model("ProductPlusUploadImage", ProductSchema);