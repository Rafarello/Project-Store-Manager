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

// Código abaixo (Object.assign()), visto em:
// https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object

async function getSaleById(req, res) {
  const { id } = req.params;
  const querySale = await Model.getSaleById(id);
  if (querySale.length < 1) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(querySale);
}

async function getAllSales(req, res) {
  const database = await Model.getAllSales();
  res.status(200).json(database);
}

module.exports = {
  insertNewSale,
  getSaleById,
  getAllSales,
};
