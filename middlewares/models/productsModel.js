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

module.exports = {
  insertProduct,
  getAll,
};