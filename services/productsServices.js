const Model = require('../models/productsModel');

// Service (Validador) do requisito 1 - POST /products

const validateName = (req, res, next) => {
  const { name } = req.body;
  const MINIMUM_LENGTH = 5;
  if (!name) {
    res.status(400).json({ message: '"name" is required' }); 
  }
  if (name.length < MINIMUM_LENGTH) {
    return res.status(422)
    .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

const validateQuantity = (req, res, next) => { 
  const { quantity } = req.body;
  if (!quantity && quantity !== 0) {
    return res.status(400).json({ message: '"quantity" is required' }); 
  }
  if (typeof quantity === 'string' || quantity <= 0) {
    return res.status(422)
      .json({ message: '"quantity" must be a number larger than or equal to 1' }); 
  }
  next();
};

const databaseCheckName = async (req, res, next) => {
  const { name } = req.body;
  const database = await Model.getAll();
  const alreadyExists = database.find((p) => p.name === name);
  if (alreadyExists) {
    return res.status(409)
      .json({ message: 'Product already exists' }); 
  } 
  next();
};

const databaseCheckId = async (req, res, next) => {
  const { id } = req.params;
  const database = await Model.getAll();
  const product = database.find((p) => p.id === Number(id));
  if (!product) {
    return res.status(404)
      .json({ message: 'Product not found' }); 
  }
  next();
};

module.exports = {
  validateName,
  validateQuantity,
  databaseCheckName,
  databaseCheckId,
};