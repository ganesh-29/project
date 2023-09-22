const express = require('express');
const router = express.Router();
const cntrlmain=require('../controller/other');
const ctrllocations =require('../controller/location');
/* GET home page. */
router.get('/',ctrllocations.homelist);
router.get('/fertilizer',ctrllocations.fertilizer);
router.get('/fertilizer/festiside/new',ctrllocations.festiside);
router.get('/fertilizer/festiside/organic/new',ctrllocations.organic);
router.get('/seeds',cntrlmain.seeds);
module.exports=router;
