const Model = require('../models/productsModel');

// Controlador do requisito 1 - POST /products

async function insertProduct(req, res) {
  const { name, quantity } = req.body;
  const insertId = await Model.insertProduct(name, quantity);
  res.status(201).json({ id: insertId, name, quantity });
}

async function getAll(req, res) {
  const database = await Model.getAll();
  res.status(200).json(database);
}

async function getById(req, res) {
  const { id } = req.params;
  const product = await Model.getById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' }); 
  res.status(200).json(product);
}

module.exports = {
  getAll,
  insertProduct,
  getById,
};