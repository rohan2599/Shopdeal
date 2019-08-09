const express = require('express');
const router = express.Router();
const {check} = require("../controllers/user");

router.get('/',check);


module.exports=router;