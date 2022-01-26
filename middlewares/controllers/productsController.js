const Model = require('../models/productsModel');

// Controlador do requisito 1 - POST /products

async function insertProduct(req, res) {
    const { name, quantity } = req.body;
    const insertId = await Model.insertProduct(name, quantity);
    res.status(200).json(insertId);
}

async function getAll(req, res) {
    const database = await Model.getAll();
    res.status(200).json(database);
}

module.exports = {
    getAll,
    insertProduct,
};