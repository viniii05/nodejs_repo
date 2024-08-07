<<<<<<< HEAD
const express = require('express');

const router = express.Router();

router.use('/shop',(req,res,next) => {
    res.send('<h1>Hello from shop!</h1>');
})

router.use('/',(req,res,next) => {
    res.send('<h1>Hello from express!</h1>');
})


module.exports = router;
=======
const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
>>>>>>> ab3f422 (Dynamic routes 1 (ejs))
