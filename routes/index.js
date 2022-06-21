const express = require('express'); //import express
const router = express.Router(); //get the router part of express

router.get('/',(req, res)=>{ //function to deal w req and res
    res.render('index');
});

module.exports = router; //so server can see it