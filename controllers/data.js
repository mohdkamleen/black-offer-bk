const Data = require("../models/data");


module.exports.add = async (req, res, next) => {
  try {
    const data = new Data(req.body);
    await data.save();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

