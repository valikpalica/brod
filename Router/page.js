const express = require('express');
const router = express.Router();
const checkAuthenticated = require('./checkAuthenticated');
const {AllPeople_render,AllCountry_render,AddPerson,AddCountry,InfoPerson,InfoCountry,PersonalPage} = require('../RenderHBS/index');
router.get('/allPerson',AllPeople_render);
router.get('/allCountry',AllCountry_render);
router.get('/addPerson',AddPerson);
router.get('/addCountry',AddCountry);
router.get('/infoPerson/:id',InfoPerson);
router.get('/infoCountry/:id',InfoCountry);
module.exports = router;