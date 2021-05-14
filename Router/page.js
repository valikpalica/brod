const express = require('express');
const router = express.Router();
const checkAuthenticated = require('./checkAuthenticated');

router.get('/allPerson',(req,res)=>{
    res.render('allPerson.hbs');
})
router.get('/allCountry',(req,res)=>{
    res.render('allCountry.hbs');
})

module.exports = router;