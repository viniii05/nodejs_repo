const express = require('express');

const router = express.Router();

router.use('/shop',(req,res,next) => {
    res.send('<h1>Hello from shop!</h1>');
})

router.use('/',(req,res,next) => {
    res.send('<h1>Hello from express!</h1>');
})


module.exports = router;