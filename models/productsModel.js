const connection = require('./connection');

// Model do requisito 1 - POST /products

const insertProduct = async (name, quantity) => {
  const query = `
    INSERT INTO products (name,quantity)
    VALUES (?, ?)`;
  const [data] = await connection.execute(query, [name, quantity]);
  const { insertId } = data;
  return insertId;
};

const getAll = async () => {
  const query = 'SELECT * FROM products';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const database = await getAll();
  const queryProduct = database.find((p) => p.id === Number(id));
  return queryProduct;
};

const updateProductById = async (id, name, quantity) => {
  const query = `
    UPDATE products 
    SET name = ?, quantity = ?
    WHERE ID = ?`;
  const updatedProduct = await connection.execute(query, [name, quantity, Number(id)]);
  return updatedProduct;
};

const deleteProductById = async (id) => {
  const query = `
    DELETE FROM products
    WHERE id = ?`;
  const deletedProduct = await connection.execute(query, [Number(id)]);
  return deletedProduct;  
  };

module.exports = {
  insertProduct,
  getAll,
  getById,
  updateProductById,
  deleteProductById,
};