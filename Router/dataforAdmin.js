const express = require('express');
const router = express.Router();
const {GetAllPeople,InsertPeroson,InsertCountry} = require('../Controllers/AllControllers');

router.get('/allPeople',GetAllPeople);
router.post('/addPerson',InsertPeroson);
router.post('/addCountry',InsertCountry)

module.exports = router;