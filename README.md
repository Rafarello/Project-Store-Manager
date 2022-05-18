# Boas vindas ao repositório do projeto Store Manager!

---

# Sumário

- [Habilidades](#habilidades)
  - [O que foi desenvolvido](#O-que-foi-desenvolvido)
- [Padrões e conexões ⚠️ ](#Padrões-e-conexões-⚠️)
  - [Conexão com o Banco](#conexão-com-o-banco)
  - [Tabelas](#tabelas)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Linter](#linter)
  - [Lista de requisitos](#lista-de-requisitos)

    `Obrigatórios`
    - [1 - Crie um endpoint para o cadastro de produtos](#1---crie-um-endpoint-para-o-cadastro-de-produtos)
    - [2 - Crie um endpoint para listar os produtos](#2---crie-um-endpoint-para-listar-os-produtos)
    - [3 - Crie um endpoint para atualizar um produto](#3---crie-um-endpoint-para-atualizar-um-produto)
    - [4 - Crie um endpoint para deletar um produto](#4---crie-um-endpoint-para-deletar-um-produto)
    - [5 - Crie um endpoint para cadastrar vendas](#5---crie-um-endpoint-para-cadastrar-vendas)
    - [6 - Crie um endpoint para listar as vendas](#6---crie-um-endpoint-para-listar-as-vendas)
    - [7 - Crie um endpoint para atualizar uma venda](#7---crie-um-endpoint-para-atualizar-uma-venda)
    - [8 - Escreva testes para cobrir 35% das camadas da sua aplicação](#8---escreva-testes-para-cobrir-35-das-camadas-da-sua-aplicação)
    - [9 - Escreva testes para cobrir 40% das camadas da sua aplicação](#9---escreva-testes-para-cobrir-40-das-camadas-da-sua-aplicação)

    `Bônus`

    - [10 - Crie um endpoint para deletar uma venda](#10---crie-um-endpoint-para-deletar-uma-venda)
    - [11 - Atualize a quantidade de produtos](#11---atualize-a-quantidade-de-produtos)
    - [12 - Valide a quantidade de produtos](#12---valide-a-quantidade-de-produtos)
    - [13 - Escreva testes para cobrir 50% das camadas da sua aplicação](#13---escreva-testes-para-cobrir-50-das-camadas-da-sua-aplicação)
    - [14 - Escreva testes para cobrir 60% das camadas da sua aplicação](#14---escreva-testes-para-cobrir-60-das-camadas-da-sua-aplicação)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

---

# Habilidades

Nesse projeto, foi colocado em prática:

- O entendimento do funcionamento da camada de Model;
- A delegação de responsabilidades específicas para essa camada;
- A conexão da aplicação com diferentes bancos de dados;
- A estruturação da aplicação em camadas;
- A delegação de responsabilidades específicas para cada parte do app;
- Melhorar manutenibilidade e reusabilidade do código;
- O entendimento e a aplicação dos padrões REST;
- Escrever assinaturas para APIs intuitivas e facilmente entendíveis.

---

# O que foi desenvolvido

Minha primeira tentativa de construit uma API Restful com as camadas de MSC!

A API construída trata-se de um sistema de gerenciamento de vendas, onde é possível criar, visualizar, deletar e atualizar produtos e vendas.

---

# Padrões e conexões ⚠️ 

### Todos os seus endpoints devem estar no padrão REST

- Use os verbos HTTP adequados para cada operação.

- Agrupe e padronize suas URL em cada recurso.

- Garanta que seus endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não.

- Retorne os códigos de status corretos (recurso criado, erro de validação, autorização, etc).

### Cada camada da sua API deve estar em sua respectiva pasta

- Models devem estar na pasta `models`, **na raiz do projeto**

- Services devem estar na pasta `services`, **na raiz do projeto**

- Controllers devem estar na pasta `controllers`, **na raiz do projeto**

## Conexão com o Banco:

**⚠️ IMPORTANTE! ⚠️**

```javascript
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});
```
Para os testes rodarem corretamente, na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo ficará desta forma:

```sh
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
PORT=3000
```

**Nota**: A variável **PORT** do arquivo `.env` deve ser utilizada para a conexão com o servidor. É importante utilizar essa variável para os testes serem executados corretamente tanto na máquina local quanto no avaliador.

Com essas configurações, enquanto estiver na máquina local, o banco será executado normalmente via localhost (possibilitando os testes via `npm test`).
Como o arquivo `.env` não será enviado para o GitHub (não se preocupe com isso, pois já está configurado no `.gitignore`), o avaliador utilizará as suas próprias variáveis de ambiente.

### Tabelas

Na raiz do projeto existe o arquivo `StoreManager.sql` que será usado para rodar os testes. Você pode importá-lo localmente para testar o comportamento da sua aplicação durante o desenvolvimento.

O banco terá três tabelas: `products`, `sales` e `sales_products`.

A tabela `products` tem o seguinte formato:

![Tabela Produtos](./public/tableproducts.png)

(O id será gerado automaticamente)

A tabela `sales` tem o seguinte formato:

![Tabela Vendas](./public/tablesales.png)

(O id e date são gerados automaticamente)

A tabela `sales_products`, é a tabela que faz o relacionamento `N:N` entre `products` e `sales` e tem o seguinte formato:

![Tabela Vendas-Produtos](./public/tablesalesproducts.png)


# Ferramenta de qualidade de código

## Linter

O [ESLint](https://eslint.org/) foi utilizado para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivos `package.json`.

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).


## Lista de requisitos

### 1 - Crie um endpoint para o cadastro de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

- Os produtos enviados devem ser salvos na tabela `products` do Banco de Dados;

- O endpoint deve receber a seguinte estrutura:

```json
{
  "name": "product_name",
  "quantity": "product_quantity"
}
```

<details close>
  <summary>O que será validado</summary>
  <br>
  
  > :point_right: Para o endpoint `POST /products`, o campo `name` deve ser uma _string_ com 5 ou mais caracteres e deve ser único.
  - Quando a requisição é feita sem o atributo `name` :  
    ```json
      { "quantity": 100 }
    ```
    - sua API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "message": "\"name\" is required" }          
    ```

  - Quando a requisição é feita e contém o seguinte `body`:
    ```json
      { "name": "pro", "quantity": 100 }
    ```
    - sua API deve responder com status http `422` e o seguinte `body`:
    ```json
      { "message": "\"name\" length must be at least 5 characters long" }          
    ```
  - Quando a requisição é feita com o atributo `name` igual um já cadastrado:
    ```json
      { "name": "produto", "quantity": 100 }
    ```
    - sua API deve responder com status http `409` e o seguinte `body`:
    ```json
      { "message": "Product already exists" }          
    ```

  > :point_right: Para o endpoint `POST /products`, o campo`quantity` deve ser um número inteiro maior que 0.
  - Quando a requisição é feita sem o atributo `quantity` :
    ```json
      { "name": "produto" }
    ```
    - sua API deve responder com status http `400` e o seguinte `body`:
      ```json
        { "message": "\"quantity\" is required" }          
      ```

  - Quando a requisição é feita e contém os seguintes `body`:
    ```json
      { "name": "produto", "quantity": "string" }
    ```         
    ```json
      { "name": "produto", "quantity": -1 }
    ```
    ```json
      { "name": "produto", "quantity": 0 }
    ```
    - sua API deve responder com status http `422` e o seguinte `body`:
    ```json
      { "message": "\"quantity\" must be a number larger than or equal to 1" }           
    ```

  > :point_right: Para o endpoint `POST /products`, quando a requisição é feita corretamente, o produto deve ser cadastrado.
  - Quando a requisição é feita e contém o seguinte `body`:
    ```json
      { "name": "produto", "quantity": 10 }
    ```
    - sua API deve responder com status http `201` e o seguinte `body`:
    ```json
      { "id": 1, "name": "produto", "quantity": 10 }          
    ```
</details>

---

### 2 - Crie um endpoint para listar os produtos

- O endpoint deve ser acessível através do caminho (`/products`) ou (`/products/:id`);

- Através do caminho `/products`, todos os produtos devem ser retornados;

- Através do caminho `/products/:id`, apenas o produto com o `id` presente na URL deve ser retornado;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Para o endpoint `GET /products`, será validado que todos produtos estão sendo retornados.
  - sua API deve responder com status http `200` e o seguinte `body`:
  ```json
    [
      {
        "id": 1,
        "name": "produto A",
        "quantity": 10
      },
      {
        "id": 2,
        "name": "produto B",
        "quantity": 20
      }
    ]
  ```

  > :point_right: Para o endpoint `GET /products/:id`, será validado que é possível listar um determinado produto.
  - sua API deve responder com status http `200` e o seguinte `body`:
    ```json
      {
        "id": 1,
        "name": "produto A",
        "quantity": 10
      }
    ```
  
  > :point_right: Para o endpoint `GET /products/:id`, será validado que não é possível listar um produto que não existe.
  - sua API deve responder com status http `404` e o seguinte `body`:
    ```json
      { "message": "Product not found" }
    ```
</details>

---

### 3 - Crie um endpoint para atualizar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);

- O corpo da requisição deve seguir a mesma estrutura do método responsável por adicionar um produto;

- Apenas o produto com o `id` presente na URL deve ser atualizado;

- O corpo da requisição deve receber a seguinte estrutura:

```json
{
  "name": "new_product_name",
  "quantity": "new_product_quantity"
}
```

<details close>
  <summary>O que será validado</summary>
  <br>
  
  > :point_right: Para o endpoint `PUT /products/:id`, o campo `name` deve ser uma _string_ com 5 ou mais caracteres e deve ser único.
  - Quando a requisição é feita e contém o seguinte `body`:
    ```json
      { "name": "pro", "quantity": 15 }
    ```
    - sua API deve responder com status http `422` e o seguinte `body`:
    ```json
      { "message": "\"name\" length must be at least 5 characters long" }          
    ```

  > :point_right: Para o endpoint `PUT /products/:id`, o campo`quantity` deve ser um número inteiro maior que 0.
  - Quando a requisição é feita e contém os seguintes `body`:
    ```json
      { "name": "produto", "quantity": "string" }
    ```         
    ```json
      { "name": "produto", "quantity": -1 }
    ```
    ```json
      { "name": "produto", "quantity": 0 }
    ```
    - sua API deve responder com status http `422` e o seguinte `body`:
    ```json
      { "message": "\"quantity\" must be a number larger than or equal to 1" }           
    ```

  > :point_right: Para o endpoint `PUT /products/:id`, quando a requisição é feita corretamente, o produto deve ser alterado.
  - Quando a requisição é feita e contém o seguinte `body`: 
    ```json
      { "name": "produto", "quantity": 15 }
    ```
    - sua API deve responder com status http `200` e o seguinte `body`:
    ```json
      { "id": 1, "name": "produto", "quantity": 15 }          
    ```
  
  > :point_right: Para o endpoint `PUT /products/:id`, será validado que não é possível alterar um produto que não existe.
  - sua API deve responder com status http `404` e o seguinte `body`:
    ```json
      { "message": "Product not found" }
    ```
</details>

---

### 4 - Crie um endpoint para deletar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);

- Apenas o produto com o `id` presente na URL deve ser deletado;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Para o endpoint `DELETE /products/:id`, será validado que é possível deletar um produto com sucesso.
  - sua API deve responder com status http `200` e o seguinte `body`:
  ```json
    {
      "id": 1,
      "name": "produto A",
      "quantity": 10
    }
  ```

  > :point_right: Para o endpoint `DELETE /products/:id`, será validado que não é possível deletar um produto que não existe.
  - sua API deve responder com status http `404` e o seguinte `body`:
    ```json
      { "message": "Product not found" }
    ```
</details>

---

### 5 - Crie um endpoint para cadastrar vendas

- O endpoint deve ser acessível através do caminho (`/sales`);

- As vendas enviadas devem ser salvas na tabela `sales` e `sales_products` do Banco de dados;

- Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;

- O endpoint deve receber a seguinte estrutura:

```json
[
  {
    "product_id": "product_id",
    "quantity": "product_quantity",
  }
]
```

<details close>
  <summary>O que será validado</summary>
  <br>
  
  > :point_right: Para o endpoint `POST /sales`, o campo `product_id` deve ser um _id_ de um produto anteriormente cadastrado.
  - Quando a requisição é feita sem o atributo `product_id` :  
    ```json
      [
        {
          "quantity": 1
        }
      ]
    ```
    - sua API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "message": "\"product_id\" is required" }          
    ```

  > :point_right: Para o endpoint `POST /sales`, o campo`quantity` deve ser um número inteiro maior que 0.
  - Quando a requisição é feita sem o atributo `quantity` :
    ```json
      [
        {
          "product_id": 1
        }
      ]
    ```
    - sua API deve responder com status http `400` e o seguinte `body`:
      ```json
        { "message": "\"quantity\" is required" }          
      ```

  - Quando a requisição é feita e contém os seguintes `body`:
    ```json
      [
        {
          "product_id": 1,
          "quantity": -1
        }
      ]
    ```         
    ```json
      [
        {
          "product_id": 1,
          "quantity": 0
        }
      ]
    ```
    ```json
      [
        {
          "product_id": 1,
          "quantity": "string"
        }
      ]
    ```
    - sua API deve responder com status http `422` e o seguinte `body`:
    ```json
      { "message": "\"quantity\" must be a number larger than or equal to 1" }           
    ```

  > :point_right: Para o endpoint `POST /sales`, quando a requisição é feita corretamente, o produto deve ser cadastrado.
  - Quando a requisição é feita e contém o seguinte `body`:
    ```json
      [
        {
          "product_id": 1,
          "quantity": 3
        }
      ]
    ```
    - sua API deve responder com status http `201` e o seguinte `body`:
    ```json
      {
        "id": 1,
        "itemsSold": [
          {
            "product_id": 1,
            "quantity": 3
          }
        ]
      }          
    ```

  > :point_right: Para o endpoint `POST /sales`, quando a requisição é feita corretamente, a venda deve ser cadastrada.
  - Quando a requisição é feita e contém o seguinte `body`:
    ```json
      [
        {
          "product_id": 1,
          "quantity": 2
        },
        {
          "product_id": 2,
          "quantity": 5
        }
      ]
    ```
    - sua API deve responder com status http `201` e o seguinte `body`:
    ```json
      {
        "id": 1,
        "itemsSold": [
          {
            "product_id": 1,
            "quantity": 2
          },
          {
            "product_id": 2,
            "quantity": 5
          }
        ]
      }          
    ```
</details>

---

### 6 - Crie um endpoint para listar as vendas

- O endpoint deve ser acessível através do caminho (`/sales`) ou (`/sales/:id`);

- Através do caminho `/sales`, todas as vendas devem ser retornadas;

- Através do caminho `/sales/:id`, apenas a venda com o `id` presente na URL deve ser retornada;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Para o endpoint `GET /sales`, será validado que todas vendas estão sendo retornados.
  - sua API deve responder com status http `200` e o seguinte `body`:
  ```json
    [
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "product_id": 1,
        "quantity": 2
      },
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:54.000Z",
        "product_id": 2,
        "quantity": 2
      }
    ]
  ```

  > :point_right: Para o endpoint `GET /sales/:id`, será validado que é possível listar uma determinada venda.
  - sua API deve responder com status http `200` e o seguinte `body`:
    ```json
      [
        { 
          "date": "2021-09-09T04:54:29.000Z",
          "product_id": 1,
          "quantity": 2
        },
        {
          "date": "2021-09-09T04:54:54.000Z",
          "product_id": 2,
          "quantity": 2
        }
      ]
    ```
  
  > :point_right: Para o endpoint `GET /sales/:id`, será validado que não é possível listar uma venda que não existe.
  - sua API deve responder com status http `404` e o seguinte `body`:
    ```json
      { "message": "Sale not found" }
    ```
</details>

---

### 7 - Crie um endpoint para atualizar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);

- `quantity` deve ser um número inteiro maior que 0;

- Apenas a venda com o `id` presente na URL deve ser atualizada;

- O corpo da requisição deve receber a seguinte estrutura:

```json
[
  {
    "product_id": "id_change",
    "quantity": "new_quantity"
  }
]
```

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Para o endpoint `PUT /sales/:id`, o campo `product_id` deve ser um _id_ de um produto anteriormente cadastrado.
  - Quando a requisição é feita sem o atributo `product_id` :  
    ```json
      [
        {
          "quantity": 10
        }
      ]
    ```
    - sua API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "message": "\"product_id\" is required" }          
    ```
  
  > :point_right: Para o endpoint `PUT /sales/:id`, o campo `quantity` deve ser um número inteiro maior que 0.
  - Quando a requisição é feita sem o atributo `quantity` :  
    ```json
      [
        {
          "product_id": 1
        }
      ]
    ```
    - sua API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "message": "\"quantity\" is required" }          
    ```

  - Quando a requisição é feita e contém os seguintes `body`:
    ```json
      [
        {
          "product_id": 1,
          "quantity": -1
        }
      ]
    ```         
    ```json
      [
        {
          "product_id": 1,
          "quantity": 0
        }
      ]
    ```
    ```json
      [
        {
          "product_id": 1,
          "quantity": "string"
        }
      ]
    ```
    - sua API deve responder com status http `422` e o seguinte `body`:
    ```json
      { "message": "\"quantity\" must be a number larger than or equal to 1" }           
    ```

  > :point_right: Para o endpoint `PUT /sales/:id`, quando a requisição é feita corretamente, a venda deve ser alterada.
  - Quando a requisição é feita e contém o seguinte `body`: 
    ```json
      [
        {
          "product_id": 1,
          "quantity": 6
        }
      ]
    ```
    - sua API deve responder com status http `200` e o seguinte `body`:
    ```json
      {
        "saleId": 1,
        "itemUpdated": [
          {
            "product_id": 1,
            "quantity": 6
          }
        ]
      }        
    ```
</details>

---

### 8 - Escreva testes para cobrir 35% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `test/unit`, **como citado [aqui](#para-escrever-seus-própios-arquivos-de-teste)**;

- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;

- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Será validado que a cobertura total das linhas dos arquivos nas pastas `models`, `services` e `controllers` é maior ou igual a 35%.

  > :point_right: Será validado que ao menos 24 linhas são cobertas pelos testes.
  
</details>

---

### 9 - Escreva testes para cobrir 40% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `test/unit`, **como citado [aqui](#para-escrever-seus-própios-arquivos-de-teste)**

- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;

- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Será validado que a cobertura total das linhas dos arquivos nas pastas `models`, `services` e `controllers` é maior ou igual a 40%.

  > :point_right: Será validado que ao menos 24 linhas são cobertas pelos testes.
  
</details>

---

## Bônus

### 10 - Crie um endpoint para deletar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);

- Apenas a venda com o `id` presente na URL deve ser deletado;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Para o endpoint `DELETE /sales/:id`, será validado que é possível deletar uma venda com sucesso.
  - sua API deve responder com status http `200` e o seguinte `body`:
  ```json
    [
      { 
        "date": "2021-09-09T04:54:29.000Z",
        "product_id": 1,
        "quantity": 2
      },
      {
        "date": "2021-09-09T04:54:54.000Z",
        "product_id": 2,
        "quantity": 2
      }
    ]   
  ```
  
  > :point_right: Para o endpoint `DELETE /sales/:id`, será validado que não é possível deletar uma venda que não existe. 
  - sua API deve responder com status http `404` e o seguinte `body`:
  ```json
    { "message": "Sale not found" }          
  ```

</details>

---

### 11 - Atualize a quantidade de produtos

- Ao realizar uma venda, atualizá-la ou deletá-la, você deve também atualizar a quantidade do produto em questão presente na tabela responsável pelos produtos;

  - **Exemplo 1**: suponha que haja um produto chamado *Bola de Futebol* e a sua propriedade `quantity` tenha o valor *10*. Caso seja feita uma venda com *8* unidades desse produto, a quantidade do produto deve ser atualizada para *2* , pois 10 - 8 = 2;
  - **Exemplo 2**: Suponha que esta venda tenha sido deletada, logo estas *8* unidades devem voltar ao `quantity` e seu valor voltará a *10*, pois 2 + 8 = 10;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Será validado que ao **fazer uma determinada venda**, a quantidade do produto deverá ser atualizada **também** na tabela responsável pelos produtos.
  
  > :point_right: Será validado que ao **deletar uma determinada venda**, a quantidade do produto deverá ser atualizada **também** na tabela responsável pelos produtos;.
 
</details>

---

### 12 - Valide a quantidade de produtos

- Um produto nunca deve ter a quantidade em estoque menor que 0;

- Quando uma venda for realizada, garanta que a quantidade sendo vendida está disponível no estoque

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Para o endpoint `POST /sales`, será validado que a quantidade de produtos em estoque nunca seja menor que 0 (zero). 
  - Quando a requisição é feita com uma quantidade superior a quantidade em estoque:  
    ```json
      [
        {
          "product_id": 1,
          "quantity": 100
        }
      ]
    ```
    - sua API deve responder com status http `422` e o seguinte `body`:
    ```json
      { "message": "Such amount is not permitted to sell" }          
    ```
  
</details>

---

### 13 - Escreva testes para cobrir 50% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `test/unit`, **como citado [aqui](#para-escrever-seus-própios-arquivos-de-teste)**;

- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;

- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Será validado que a cobertura total das linhas dos arquivos nas pastas `models`, `services` e `controllers` é maior ou igual a 50%.

  > :point_right: Será validado que ao menos 24 linhas são cobertas pelos testes.
  
</details>

---

### 14 - Escreva testes para cobrir 60% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `test/unit`, **como citado [aqui](#para-escrever-seus-própios-arquivos-de-teste)**;

- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;

- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;

<details close>
  <summary>O que será validado</summary>
  <br>

  > :point_right: Será validado que a cobertura total das linhas dos arquivos nas pastas `models`, `services` e `controllers` é maior ou igual a 60%.

  > :point_right: Será validado que ao menos 24 linhas são cobertas pelos testes.
  
</details>

---
## Depois de terminar o desenvolvimento

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo **Lint** estão resolvidas! ⚠

---

## Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

---

# Avisos finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?
