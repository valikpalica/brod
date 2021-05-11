const express = require('express');
const main_route = express.Router();
const {Autorization,Registration} = require('../Controllers/AllControllers');

main_route.get('/autorization',Autorization);
main_route.post('/autorization',(req,res)=>{console.log(req.body);})
main_route.get('/registration',Registration);


module.exports = main_route;