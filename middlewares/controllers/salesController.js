const Model = require('../models/salesModel');

const insertNewSale = async (req, res) => {
  const newSale = req.body;
  const saleId = await Model.registerNewSale(newSale);
  console.log(`O id da venda é: ${saleId}`);
  newSale.forEach(async ({ product_id, quantity }) => {
    try {
      const [{ affectedRows }] = await Model
        .registerItemSold(saleId, product_id, quantity);
      console.log(`Quantidade de rows afetadas é: ${affectedRows}`);
    } catch (error) {
      console.error(error);
    }
  });
  return res.status(201).json({ id: saleId, itemsSold: newSale });
};

module.exports = {
  insertNewSale,
};
