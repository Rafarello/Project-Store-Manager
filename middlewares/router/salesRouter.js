const express = require('express');
const rescue = require('express-rescue');

// Documentação utilizada vista em:
// https://expressjs.com/pt-br/guide/routing.html
const router = express.Router();

const Service = require('../services/salesServices');
const Controller = require('../controllers/salesController');

const { 
    validateId,
    validateQuantity } = Service;
  const { 
    insertNewSale } = Controller;

router.post('/', validateId, validateQuantity, rescue(insertNewSale));

module.exports = router;