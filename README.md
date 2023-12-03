## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema. Em seguida, abra o terminal e navegue até a pasta do projeto.

### 2. Criar o banco de dados no MYSQL e executar o server

No diretório `server/`, executar o código que está no arquivo bd.sql no mysql ativo, e em seguida editar o arquivo "server.js" e mudar o username e senha para o seu caso.
em seguida, executar no mesmo diretório:

```bash
npm install
node server.js
```

### 3. Executar o FrontEnd:

No diretório `atv5/` executar os dois comandos:
```bash
npm install
npm start
```