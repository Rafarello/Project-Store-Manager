const express = require('express');
const rescue = require('express-rescue');

// Documentação utilizada vista em:
// https://expressjs.com/pt-br/guide/routing.html
const router = express.Router();

const Service = require('../services/productsServices');
const Controller = require('../controllers/productsController');

const { 
  validateName,
  validateQuantity,
  databaseCheckName,
  databaseCheckId } = Service;
const { 
  insertProduct,
  getAll,
  getById,
  updateById,
  deleteById } = Controller;

router.post(
  '/',
  validateName,
  validateQuantity,
  rescue(databaseCheckName),
  rescue(insertProduct),
);
router.get('/:id', rescue(getById));
router.get('/', rescue(getAll));
router.put(
  '/:id',
  validateName,
  validateQuantity,
  rescue(updateById),
);
router.delete('/:id', rescue(databaseCheckId), rescue(deleteById));

module.exports = router;