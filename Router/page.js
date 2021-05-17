const express = require('express');
const router = express.Router();
const checkAuthenticated = require('./checkAuthenticated');
const {AllPeople_render,AllCountry_render,AddPerson,AddCountry} = require('../RenderHBS/index');
router.get('/allPerson',AllPeople_render);
router.get('/allCountry',AllCountry_render);
router.get('/addPerson',AddPerson);
router.get('/addCountry',AddCountry);
module.exports = router;