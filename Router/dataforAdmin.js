const express = require('express');
const router = express.Router();
const {GetAllPeople,InsertPeroson,InsertCountry,GetAllCountry,BlockCountry,AddTravel,InfoCountry,InfoPerson} = require('../Controllers/AllControllers');

router.get('/allPeople',GetAllPeople);
router.get('/addCountry',GetAllCountry);
router.post('/addPerson',InsertPeroson);
router.post('/addCountry',InsertCountry);
router.post('/statusCountry',BlockCountry);
router.post('/addTravel',AddTravel);
router.post('/infoPerson',InfoPerson);
router.post('/infoCountry',InfoCountry);

module.exports = router;