require('dotenv').config();
const express = require('express');

const app = express();

const productsRouter = require('./middlewares/router/productsRouter');
const salesRouter = require('./middlewares/router/salesRouter');

app.use(express.json());

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send('Tá funcionando!');
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
