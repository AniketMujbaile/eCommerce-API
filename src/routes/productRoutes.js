const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a product
router.post('/products', productController.createProduct);

// Retrieve all products
router.get('/products', productController.getAllProducts);

// Retrieve a specific product
router.get('/products/:productId', productController.getProductById);

// Update a product
router.put('/products/:productId', productController.updateProduct);

// Delete a product
router.delete('/products/:productId', productController.deleteProduct);

// Search products by name, description, or variant name
router.post('/products/search', productController.searchProducts);

module.exports = router;
