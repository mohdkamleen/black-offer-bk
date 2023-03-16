const express = require('express'); 
const router = express.Router()  
const Data = require('../controllers/data')
  
router.route('/').get(Data.get); 
router.route('/add').post(Data.add);  
 
module.exports = router;  
 