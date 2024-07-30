const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    createProduct,
    updateProductById,
    deleteProductById
} = require('./controller/productController');
const { deleteProductByID, updateProductByID } = require('./productController-v2');

router.get('/get-all-products', getAllProducts);
router.post('/create-product', createProduct);
router.put('/find-and-update/:id', updateProductById);
router.delete('/delete-product/:id', deleteProductById);

module.exports = {
    getAllProducts,
    createProduct,
    updateProductByID,
    deleteProductByID
};