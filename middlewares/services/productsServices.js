const Model = require('../models/productsModel');

// Service (Validador) do requisito 1 - POST /products

const validateName = async (name) => {
  const MINIMUM_LENGTH = 5;
  const database = await Model.getAll();
  const alreadyExists = database.find((p) => p.name === name);
  if (!name) {
    return { status: 400, message: '"name" is required' };
  }
  if (name.length < MINIMUM_LENGTH) {
    return { status: 422, message: '"name" length must be at least 5 characters long' };
  }
  if (alreadyExists) return { status: 409, message: 'Product already exists' };
  return { status: 200, message: 'Name is Valid' };
};

const validateQuantity = (quantity) => {
  const invalidTypeCase = typeof quantity === 'string' || quantity < 0;
  if (!quantity) {
    return {
      status: 400,
      message: '"quantity" is required',
    };
  }
  if (invalidTypeCase) {
    return {
      status: 422,
      message: '"quantity" must be a number larger than or equal to 1',
    };
  }
  
  return { status: 200, message: 'Quantity is Valid' };
};

const validateProduct = async (req, res, next) => {
  const { name, quantity } = req.body;
  const { status: nameStatus, message: nameMessage } = await validateName(name);
  const { status: quantityStatus, quantityMessage } = validateQuantity(quantity);
  if (nameStatus !== 200) {
    return res.status(nameStatus).json({ message: nameMessage });
  }
  if (quantityStatus !== 200) {
    return res.status(quantityStatus).json({ message: quantityMessage });
  }
  next();
};

module.exports = {
  validateProduct,
};