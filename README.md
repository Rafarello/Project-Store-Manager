# Boas vindas ao repositório do projeto Store Manager!

---

# Sumário

- [Habilidades](#habilidades)
  - [O que foi desenvolvido](#O-que-foi-desenvolvido)
- [Padrões e conexões](#Padrões-e-conexões)
  - [Conexão com o Banco](#conexão-com-o-banco)
  - [Tabelas](#tabelas)
- [Ferramenta de qualidade de código](#Ferramenta-de-qualidade-de-código)
- [Como iniciar o projeto](#Como-iniciar-o-projeto)

---

# Habilidades

Nesse projeto, foi colocado em prática:

- O entendimento do funcionamento da camada de Model;
- A delegação de responsabilidades específicas para essa camada;
- A realização de queries utilizando mysql;
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

# Padrões e conexões

### Todos os endpoints devem estar no padrão REST

- Usar os verbos HTTP adequados para cada operação.

- Agrupar e padronize suas URL em cada recurso.

- Garantir que os endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não.

- Retornar os códigos de status corretos (recurso criado, erro de validação, autorização, etc).

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


# Como iniciar o projeto

1. Fazer o clone em sua máquina

2. Fazer as instalações das dependências digitando `npm install` no terminal

3. Usar o comando de criar e semear o banco de dados `npm run prestart`

4. Para iniciar o projeto, utilize `npm run install`
