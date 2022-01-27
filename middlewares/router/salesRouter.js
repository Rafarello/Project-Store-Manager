const express = require('express');
const rescue = require('express-rescue');

// Documentação utilizada vista em:
// https://expressjs.com/pt-br/guide/routing.html
const router = express.Router();

const Service = require('../services/salesServices');
const Controller = require('../controllers/salesController');

const {
  validateId,
  validateQuantity,
  validateQuantityType } = Service;
const { insertNewSale, getSaleById, getAllSales } = Controller;

router.post('/', validateId, validateQuantity, validateQuantityType, rescue(insertNewSale));
router.get('/:id', rescue(getSaleById));
router.get('/', rescue(getAllSales));

module.exports = router;