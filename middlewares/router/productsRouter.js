const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const Service = require('../services/productsServices');
const Controller = require('../controllers/productsController');

const { validateProduct } = Service;
const { insertProduct, getAll } = Controller;

router.post('/', rescue(validateProduct), rescue(insertProduct));
router.get('/', rescue(getAll));

module.exports = router;