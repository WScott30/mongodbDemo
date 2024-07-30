const Product = require("../model/Product") // pulls schema for DB use

async function getAllProducts(req, res) {
    try {
        const foundProducts = await Product.find({})
        res.json({ message: "Products found", payload: foundProducts })
    } catch (error) {
        res.status(500).json({ message: "Error", error: error })
    }
}

async function createProduct(req, res) {
    try {
        const newProduct = new Product({
            ...req.body
        })
        const savedProduct = await newProduct.save()
        res.json({ message: "Product created", payload: savedProduct })
    } catch (error) {
        res.status(500).json({ message: "Error", error: error })
    }
}

async function updateProductById(req, res) {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" })
        }
        
        res.json({ message: "Product Updated", payload: updatedProduct })
    } catch (error) {
        res.status(500).json({ message: "Error", error: error })
    }
}

async function deleteProductById(req, res) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" })
        }
        
        res.json({ message: "Product Deleted", payload: deletedProduct })
    } catch (error) {
        res.status(500).json({ message: "Error", error: error })
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProductById,
    deleteProductById
}