require('dotenv').config();
const express = require('express');

const app = express();

const productsRouter = require('./middlewares/router/productsRouter');

app.use(express.json());

app.use('/products', productsRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send('Tá funcionando!');
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
