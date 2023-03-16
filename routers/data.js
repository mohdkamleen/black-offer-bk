const express = require('express'); 
const router = express.Router()  
const Data = require('../controllers/user')
  
router.route('/register').post(Data.register); 
router.route('/contact').post(Data.contact); 
 
module.exports = router;  
 