// const Model = require('../models/salesModel');

// Requisito 5 - POST /sales

const validateId = (req, res, next) => {
  const salesArray = req.body;
  salesArray.forEach((sale) => {
    if (sale.product_id === undefined) {
      return res.status(400)
        .json({ message: '"product_id" is required' });
    }
  });
  
  next();
};

const validateQuantity = (req, res, next) => {
  const salesArray = req.body;
  salesArray.forEach((sale) => {
    if (sale.quantity === undefined) {
      return res.status(400)
        .json({ message: '"quantity" is required' });
    } if (typeof sale.quantity === 'string' || sale.quantity <= 0) {
      return res.status(422)
        .json({ message: '"quantity" must be a number larger than or equal to 1' });
    }
  });
  next();
};

module.exports = {
  validateId,
  validateQuantity,
};