<<<<<<< HEAD
const express = require('express');

const router = express.Router();

router.use('/add-product',(req,res,next) => {
    res.send(
        '<form action="product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type=""Submit>Add Product</button></form>'
    );
});

router.post('/product',(req,res,next)=>{
    res.redirect('/');
})

module.exports = router;
=======
const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
>>>>>>> ab3f422 (Dynamic routes 1 (ejs))
