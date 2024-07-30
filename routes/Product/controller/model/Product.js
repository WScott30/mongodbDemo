const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    price: {
        type:Number
    },
    inStock:{
        type: Boolean
    }
})
module.exports = mongoose.model("product", productSchema)