const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
} = require('../controller/productControllers');

//Get all products from DB
router.get('/', getAllProducts);

//Get product by id from db
router.get('/:id', getProductById);

module.exports = router;
