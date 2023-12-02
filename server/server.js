const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; 


const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: 'lucca',
  database: 'atvwb',
});

connection.connect();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.post('/cadastrarCliente', (req, res) => {
  const {
    nome,
    nome_social,
    telefone,
    cpf,
    email,
    genero,
  } = req.body;

  const sql = `INSERT INTO cliente (nome, nome_social, telefone, cpf, email, genero, quantidade_consumo, valor_gasto) VALUES (?, ?, ?, ?, ?, ?, 0, 0)`;
  const values = [nome, nome_social, telefone, cpf, email, genero];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao cadastrar cliente' });
    } else {
      res.json({ success: true, message: 'Cliente cadastrado com sucesso' });
    }
  });
});

app.get('/listarClientes', (req, res) => {
  const sql = 'SELECT id, nome, cpf, email FROM cliente';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter a lista de clientes' });
    } else {
      const clientes = results.map((cliente) => ({
        id: cliente.id,
        nome: cliente.nome,
        cpf: cliente.cpf,
        email: cliente.email,
      }));
      res.json({ clientes });
    }
  });
});

app.delete('/excluirCliente/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  connection.query('DELETE FROM cliente WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir cliente:', err);
      res.status(500).json({ error: 'Erro interno ao excluir cliente' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Cliente excluído com sucesso' });
      } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
      }
    }
  });
});

app.get('/listarClientesMasculinos', (req, res) => {
  const sql = 'SELECT id, nome, cpf, email FROM cliente WHERE genero = "masculino"';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter a lista de clientes masculinos' });
    } else {
      const clientes = results.map((cliente) => ({
        id: cliente.id,
        nome: cliente.nome,
        cpf: cliente.cpf,
        email: cliente.email,
      }));
      res.json({ clientes });
    }
  });
});

app.get('/listarClientesFemininas', (req, res) => {
  const sql = 'SELECT id, nome, cpf, email FROM cliente WHERE genero = "feminino"';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter a lista de clientes femininas' });
    } else {
      const clientes = results.map((cliente) => ({
        id: cliente.id,
        nome: cliente.nome,
        cpf: cliente.cpf,
        email: cliente.email,
      }));
      res.json({ clientes });
    }
  });
});



app.post('/cadastrarProduto', (req, res) => {
  const {
    nome,
    valor,
  } = req.body;

  const sql = `INSERT INTO produto (nome, valor, quantidade_vendas, quantidade_vendas_masculino, quantidade_vendas_feminino) VALUES (?, ?, 0, 0, 0)`;
  const values = [nome, valor];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao cadastrar produto' });
    } else {
      res.json({ success: true, message: 'Produto cadastrado com sucesso' });
    }
  });
});

app.get('/listarProdutos', (req, res) => {
  const sql = 'SELECT id, nome, valor, quantidade_vendas FROM produto';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter a lista de produtos' });
    } else {
      const produtos = results.map((produto) => ({
        id: produto.id,
        nome: produto.nome,
        valor: produto.valor,
        quantidade_vendas: produto.quantidade_vendas,
      }));
      res.json({ produtos });
    }
  });
});


app.delete('/excluirProduto/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  connection.query('DELETE FROM produto WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir produto:', err);
      res.status(500).json({ error: 'Erro interno ao excluir produto' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Produto excluído com sucesso' });
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    }
  });
});

app.post('/cadastrarServico', (req, res) => {
  const {
    nome,
    valor,
  } = req.body;

  const sql = `INSERT INTO servico (nome, valor, quantidade_vendas, quantidade_vendas_masculino, quantidade_vendas_feminino) VALUES (?, ?, 0, 0, 0)`;
  const values = [nome, valor];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao cadastrar serviço' });
    } else {
      res.json({ success: true, message: 'Serviço cadastrado com sucesso' });
    }
  });
});

app.get('/listarServicos', (req, res) => {
  const sql = 'SELECT id, nome, valor, quantidade_vendas FROM servico';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter a lista de serviços' });
    } else {
      const servicos = results.map((servico) => ({
        id: servico.id,
        nome: servico.nome,
        valor: servico.valor,
        quantidade_vendas: servico.quantidade_vendas,
      }));
      res.json({ servicos });
    }
  });
});

app.delete('/excluirServico/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  connection.query('DELETE FROM servico WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir serviço:', err);
      res.status(500).json({ error: 'Erro interno ao excluir serviço' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Serviço excluído com sucesso' });
      } else {
        res.status(404).json({ error: 'Serviço não encontrado' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});