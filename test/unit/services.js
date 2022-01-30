const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const ProductsModel = require('../../models/productsModel');
const ProductsService = require('../../services/productsServices');
const { request } = require('express');

const product_name1 = 'product_name1';
const product_quantity1 = 100;
const product_name2 = 'product_name2';
const product_quantity2 = 200;

describe('Insere um novo produto no DB', () => {

  const request = {};

// Código abaixo visto em:
// https://stackoverflow.com/questions/28053206/node-express-testing-mock-res-statusstatus-jsonobj

  before(() => {
    request.body = {
      name: product_name1,
      quantity: product_quantity1,
    };
    response = {
        send: () => sinon.stub().returns(),
        json: function(message){
            console.log("\n : " + message);
        },
        status: function(responseStatus) {
            sinon.stub().returns(response);
            // This next line makes it chainable
            return this; 
        }
    }
    next = sinon.stub().returns();
  })

  describe('Quando é inserido com formato correto', () => {

    it('Não deve retornar nenhuma mensagem de erro', () => {
      const errorMessage = ProductsService.validateName(request, response, next);
      expect(errorMessage).to.equal(undefined);
    })
  })

})