const Model = require('../models/salesModel');

const insertNewSale = async (req, res) => {
  const newSale = req.body;
  console.log(newSale);
  const saleId = await Model.registerNewSale(newSale);
  console.log(saleId);
  newSale.forEach(async ({ product_id, quantity }) => {
    try {
      const data = await Model
        .registerItemSold(saleId, product_id, quantity);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });
  res.status(201).json(saleId);
};

module.exports = {
  insertNewSale,
};
