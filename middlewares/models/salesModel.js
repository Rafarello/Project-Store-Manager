const connection = require('./connection');

const registerNewSale = async () => {
  const query = `
      INSERT INTO sales (date)
      VALUES (NOW())`;
  try {
    const [{ insertId }] = await connection.execute(query);
    return insertId;
  } catch (error) {
    console.error(error);
  }
};

const registerItemSold = async (saleId, productId, quantity) => {
  const query = `
      INSERT INTO sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`;
  try {
    const data = await connection.execute(query, [saleId, productId, quantity]);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getAllSales = async () => {
  const query = `
    SELECT  sales.id, sales.date, sales_products.product_id, sales_products.quantity
    FROM sales JOIN sales_products
    ON sales.id = sales_products.sale_id;`;
  const [data] = await connection.execute(query);
  return data;
};

const getAllSaleDates = async () => {
  const query = `
    SELECT * FROM sales`;
  const [data] = await connection.execute(query);
  return data;
};

const getSaleDateById = async (id) => {
  const database = await getAllSaleDates();
  const { date: queryDate } = database.find((p) => p.id === Number(id));
  return queryDate;
};

const getSaleById = async (id) => {
  const query = `
    SELECT sales.date, sales_products.product_id, sales_products.quantity
    FROM sales JOIN sales_products
    ON sales.id = sales_products.sale_id
    WHERE sales.id = ?;`;
  const [data] = await connection.execute(query, [id]);
  console.log(data);
  return data;
};

module.exports = {
  registerNewSale,
  registerItemSold,
  getAllSales,
  getSaleById,
  getAllSaleDates,
  getSaleDateById,
};