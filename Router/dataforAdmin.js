const express = require('express');
const router = express.Router();
const {GetAllPeople,InsertPeroson,InsertCountry,GetAllCountry} = require('../Controllers/AllControllers');

router.get('/allPeople',GetAllPeople);
router.get('/addCountry',GetAllCountry);
router.post('/addPerson',InsertPeroson);
router.post('/addCountry',InsertCountry)

module.exports = router;