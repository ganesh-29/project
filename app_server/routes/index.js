const express = require('express');
const router = express.Router();
const cntrlmain=require('../controller/main');
/* GET home page. */
router.get('/',cntrlmain.index);
module.exports=router;
