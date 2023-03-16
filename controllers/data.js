const Data = require("../models/data");  
 
 
module.exports.register = async (req, res, next) => {
  console.log(req.body);
  try {
    const newData = new Data({profile:req.body});
    await newData.save();
    res.status(200).json(newData); 
  } catch (err) {
    next(err);
  }
};
 
module.exports.contact = async (req, res, next) => {
  console.log(req.body);
  try {
    const newData = new Contact(req.body);
    await newData.save();
    res.status(200).json(newData); 
  } catch (err) {
    next(err);
  }
};
 
