const express = require('express');
const router = express.Router();
const {GetAllPeople,InsertPeroson,InsertCountry,GetAllCountry,BlockCountry,AddTravel,InfoCountry,InfoPerson,DisabledCountry,EnableCountry} = require('../Controllers/AllControllers');

router.get('/allPeople',GetAllPeople);
router.get('/allCountry',GetAllCountry);
router.post('/addPerson',InsertPeroson);
router.post('/addCountry',InsertCountry);
router.post('/blockCountry',BlockCountry);
router.post('/addTravel',AddTravel);
router.post('/infoPerson',InfoPerson);
router.post('/infoCountry',InfoCountry);
router.post('/getdisable',DisabledCountry);
router.post('/getenable',EnableCountry);


module.exports = router;