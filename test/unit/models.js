const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const ProductsModel = require('../../models/productsModel')
const SalesModel = require('../../models/salesModel')

const product_id1 = 1;
const product_name1 = 'product_name1';
const product_quantity1 = 100;
const product_id2 = 2;
const product_name2 = 'product_name2';
const product_quantity2 = 200;

describe('Insere um novo produto no DB', () => {
  const payloadProduct = {
    name: product_name1,
    quantity: product_quantity1
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  })

  describe('Quando é inserido com sucesso', () => {

    it('Deve retornar um objeto', async () => {
      const { name, quantity } = payloadProduct;
      const insertId = await ProductsModel.insertProduct(name, quantity)
      const response = { id: insertId, name, quantity }

      expect(response).to.be.a('object');
    })

    it('Deve ter o retorno, um objeto com a chave "id" do produto inserido',
      async () => {
        const { name, quantity } = payloadProduct;
        const insertId = await ProductsModel.insertProduct(name, quantity)
        const response = { id: insertId, name, quantity }

        expect(response).to.have.a.property('id');
      })
  })
});

describe('Listar todos os produtos do DB', () => {

  before(async () => {
    const execute = [{ id: 1, name: 'product_name1', quantity: 100 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  })

  describe('Quando é listado com sucesso', () => {

    it('Deve retornar o produto inserido com sucesso', async () => {
      const response = await ProductsModel.getAll();

      expect(response).to.be.a('object');
    })

    it('Deve ter a propriedade "id" do produto inserido', async () => {
      const response = await ProductsModel.getAll();

      expect(response).to.have.property('id').to.equal(1)
    })

    it('Deve ter a propriedade "name" do produto inserido', async () => {
      const response = await ProductsModel.getAll();

      expect(response).to.have.property('name').to.equal(product_name1)
    })

    it('Deve ter a propriedade "quantity" do produto inserido', async () => {
      const response = await ProductsModel.getAll();

      expect(response).to.have.property('quantity').to.equal(product_quantity1)
    })

  })
});

describe('Listar um produto específico usando o id', () => {
  before(async () => {
    const execute = [[{ id: 1, name: 'product_name1', quantity: 100 }]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando é listado com sucesso', async () => {

    it('Deve retornar o produto com id correto', async () => {
      const response = await ProductsModel.getById(1);
      expect(response).to.be.a('object')
    });

    it('Deve ter a propriedade "id" do produto inserido', async () => {
      const response = await ProductsModel.getById(1);

      expect(response).to.have.property('id').to.equal(1)
    });

    it('Deve ter a propriedade "name" do produto inserido', async () => {
      const response = await ProductsModel.getById(1);

      expect(response).to.have.property('name').to.equal(product_name1)
    });

    it('Deve ter a propriedade "quantity" do produto inserido', async () => {
      const response = await ProductsModel.getById(1);

      expect(response).to.have.property('quantity').to.equal(product_quantity1)
    });

  })
})

describe('Atualizar os produtos do DB', () => {

  before(async () => {
    const execute = [{ affectedRows: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando é atualizado com sucesso', () => {

    it('Deve retornar 0 se não teve produtos alterados, 1 se sim', async () => {
      const [{affectedRows}] = await ProductsModel.updateProductById(1, product_name2, product_quantity2);
      expect(affectedRows).to.equal(1);
    });
  });
});

describe('Deletar um produto do DB', () => {
  before(async () => {
    const execute = [{ affectedRows: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Deve retornar 0 se não teve produtos deletados, 1 se sim', async () => {
    const [{affectedRows}] = await ProductsModel.deleteProductById(1);
    expect(affectedRows).to.equal(1);
  });
})

describe('Insere uma nova venda no DB', () => {

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando é inserida com sucesso', () => {

    it('Deve retornar o ID da venda', async () => {
      const response = await SalesModel.registerNewSale();
      expect(response).to.equal(1);
    });
    it('Deve retornar 1 se foi feito o registro, 0 se não', async () => {
      const saleId = 1;
      const [{affectedRows}] = await SalesModel.registerItemSold(saleId, product_id1, product_quantity1);
    })
  });

});

describe('Listar todas as vendas no DB', () => {

  before(async () => {
    const execute = [[
      {
        saleId: 1,
        date: '2022-01-30T15:49:10.000Z',
        product_id: 2,
        quantity: 2
      },
      {
        saleId: 1,
        date: '2022-01-30T15:49:10.000Z',
        product_id: 3,
        quantity: 5
      }
    ]
    ];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando é listado com sucesso', () => {

    it('Deve retornar o objeto com as vendas', async () => {
      const response = await SalesModel.getAllSales();
      expect(response).to.be.a('array')
    });
    it('Deve possuir todas as propriedades', async () => {
      const response = await SalesModel.getAllSales();
      expect(response[0]).to.have.all.keys(['saleId', 'date', 'product_id', 'quantity'])
    });
  });
});

describe('Listar uma venda especifica com ID do DB', () => {

  before(async () => {
    const execute =[
      [
        { date: '2022-01-30T15:49:10.000Z', product_id: 2, quantity: 2 },
        { date: '2022-01-30T15:49:10.000Z', product_id: 3, quantity: 5 }
      ]
    ];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando é listado com sucesso', () => {

    it('Deve retornar o objeto com as vendas', async () => {
      const response = await SalesModel.getSaleById(product_id1);
      expect(response).to.be.a('array')
    });
    it('Deve possuir todas as propriedades', async () => {
      const response = await SalesModel.getSaleById(product_id1);
      expect(response[0]).to.have.all.keys(['date', 'product_id', 'quantity'])
    });
  });
  
})