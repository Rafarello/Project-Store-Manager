const connection = require('./connection');

const registerNewSale = async () => {
    const query = `
      INSERT INTO sales (date)
      VALUES (now())`;
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

module.exports = {
  registerNewSale,  
  registerItemSold,
};