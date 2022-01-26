const express = require('express');
const rescue = require('express-rescue');

// Documentação utilizada vista em:
// https://expressjs.com/pt-br/guide/routing.html
const router = express.Router();

const Service = require('../services/productsServices');
const Controller = require('../controllers/productsController');

const { validateProduct } = Service;
const { insertProduct, getAll, getById } = Controller;

router.post('/', rescue(validateProduct), rescue(insertProduct));
router.get('/:id', rescue(getById));
router.get('/', rescue(getAll));

module.exports = router;