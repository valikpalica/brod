const express = require('express');
const main_route = express.Router();
const passport = require('passport');
const {Autorization,Registration} = require('../Controllers/AllControllers');
const {Autorization_render, Registration_render} = require('../RenderHBS/index');
const checkAuthenticated = require('./checkAuthenticated');

main_route.get('/autorization',Autorization_render);

main_route.post('/autorization',passport.authenticate('local', {
    failureRedirect: '/main/autorization',
    failureFlash: 'Invalid username or password.',
}),Autorization)

main_route.get('/registration',Registration_render);

main_route.post('/registration',Registration);

main_route.get('/test',checkAuthenticated,(req,res)=>{
    res.send('Autorization on system');
})



module.exports = main_route;