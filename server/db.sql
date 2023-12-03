create database atvwb;
use atvwb;

CREATE TABLE cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  nome_social VARCHAR(255),
  telefone VARCHAR(15),
  cpf VARCHAR(14),
  email VARCHAR(255),
  genero VARCHAR(10),
  quantidade_consumo INT,
  valor_gasto DECIMAL(10, 2)
);

CREATE TABLE produto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  valor DECIMAL(10, 2),
  quantidade_vendas INT,
  quantidade_vendas_masculino INT,
  quantidade_vendas_feminino INT
);

CREATE TABLE servico (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  valor DECIMAL(10, 2),
  quantidade_vendas INT,
  quantidade_vendas_masculino INT,
  quantidade_vendas_feminino INT
);

CREATE TABLE historico_vendas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_cliente VARCHAR(255) NOT NULL,
  cpf_cliente VARCHAR(15) NOT NULL,
  nome_servico_ou_produto VARCHAR(255) NOT NULL,
  quantidade_venda INT NOT NULL,
  valor_venda DECIMAL(10, 2) NOT NULL,
  data_venda TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO cliente (nome, nome_social, telefone, cpf, email, genero, quantidade_consumo, valor_gasto) VALUES
('Ana Silva', 'Ana', '123456789', '11111112121', 'ana.silva@gmail.com', 'feminino', 5, 200.50),
('Carlos Oliveira', 'Carlos', '987654321', '22112222222', 'carlos.oliveira@gmail.com', 'masculino', 8, 350.75),
('Fernanda Santos', 'Fernanda', '456789123', '36633333333', 'fernanda.santos@gmail.com', 'feminino', 10, 500.00),
('Gabriel Lima', 'Gabriel', '321654987', '44444488444', 'gabriel.lima@gmail.com', 'masculino', 3, 150.25),
('Juliana Pereira', 'Juliana', '789123456', '55556655555', 'juliana.pereira@gmail.com', 'feminino', 12, 700.80),
('Marcos Oliveira', 'Marcos', '654987321', '66656623666', 'marcos.oliveira@gmail.com', 'masculino', 6, 250.45),
('Patrícia Silva', 'Patricia', '234567890', '77678977777', 'patricia.silva@gmail.com', 'feminino', 15, 900.30),
('Rafael Santos', 'Rafael', '876543210', '88886884888', 'rafael.santos@gmail.com', 'masculino', 9, 400.60),
('Tatiane Lima', 'Tatiane', '543210987', '24993992999', 'tatiane.lima@gmail.com', 'feminino', 7, 300.20),
('Vinícius Pereira', 'Vinicius', '109876543', '40567010101', 'vinicius.pereira@gmail.com', 'masculino', 4, 180.90);

INSERT INTO produto (nome, valor, quantidade_vendas, quantidade_vendas_masculino, quantidade_vendas_feminino) VALUES
('Shampoo', 20.00, 30, 15, 15),
('Condicionador', 18.50, 25, 12, 13),
('Coloração', 50.00, 20, 10, 10),
('Secador de Cabelo', 120.00, 15, 8, 7),
('Prancha Alisadora', 90.00, 18, 8, 10),
('Tesoura de Corte', 40.00, 22, 12, 10),
('Secador de Unhas', 25.00, 28, 12, 16),
('Kit Manicure', 30.00, 25, 10, 15),
('Toalha de Cabelo', 15.00, 30, 18, 12),
('Acessórios para Cabelo', 10.00, 40, 20, 20);

INSERT INTO servico (nome, valor, quantidade_vendas, quantidade_vendas_masculino, quantidade_vendas_feminino) VALUES
('Corte de Cabelo', 30.00, 50, 30, 20),
('Coloração', 80.00, 25, 12, 13),
('Manicure', 25.00, 40, 15, 25),
('Pedicure', 30.00, 35, 15, 20),
('Hidratação Capilar', 45.00, 20, 10, 10),
('Escova Progressiva', 120.00, 15, 8, 7),
('Maquiagem', 40.00, 18, 8, 10),
('Depilação', 50.00, 28, 15, 13),
('Massagem Relaxante', 60.00, 30, 15, 15),
('Design de Sobrancelhas', 20.00, 40, 18, 22);


select * from cliente;
select * from produto;
select * from servico;
select * from historico_vendas;

