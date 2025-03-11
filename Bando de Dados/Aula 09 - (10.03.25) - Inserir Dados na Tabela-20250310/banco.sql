CREATE DATABASE banco;

USE banco;

SELECT * FROM cliente;

CREATE TABLE categoria_cliente(
id_categoria_cliente INT NOT NULL AUTO_INCREMENT,
nome_categoria_cliente VARCHAR(100),
PRIMARY KEY (id_categoria_cliente)
);

INSERT INTO categoria_cliente
(nome_categoria_cliente)
VALUES
('Privado');
INSERT INTO categoria_cliente
(nome_categoria_cliente)
VALUES
('Exclusive');
INSERT INTO categoria_cliente
(nome_categoria_cliente)
VALUES
('Gold');
INSERT INTO categoria_cliente
(nome_categoria_cliente)
VALUES
('Basico');

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome_cliente VARCHAR(100),
numero_cpf_cliente INT,
numero_celular_cliente INT,
rua_cliente VARCHAR(50),
numero_casa_cliente VARCHAR(50),
bairro_cliente VARCHAR(50),
cep_cliente INT,
cidade_cliente VARCHAR(50),
estado_cliente VARCHAR(50),
categoria_cliente_id INT,
PRIMARY KEY(id_cliente),
FOREIGN KEY (categoria_cliente_id)
REFERENCES categoria_cliente (id_categoria_cliente)
);

ALTER TABLE cliente
MODIFY COLUMN numero_cpf_cliente BIGINT;

INSERT INTO cliente
(nome_cliente, numero_cpf_cliente, numero_celular_cliente, rua_cliente, numero_casa_cliente, bairro_cliente, cep_cliente, cidade_cliente, estado_cliente)
VALUES
('João Silva', '12345678900', '987654321', 'Rua das Flores', 50, 'Jardim Primavera', '12345678', 'São Paulo', 'SP'),
('Maria Oliveira', '23456789011', '998765432', 'Avenida Brasil', 105, 'Centro', '23456789', 'Rio de Janeiro', 'RJ'),
('Pedro Santos', '34567890122', '919876543', 'Rua do Sol', 200, 'Bela Vista', '34567890', 'Belo Horizonte', 'MG'),
('Ana Costa', '45678901233', '944567890', 'Rua das Acácias', 150, 'Jardim das Palmeiras', '45678901', 'Curitiba', 'PR'),
('Carlos Pereira', '56789012344', '930123456', 'Rua dos Cravos', 75, 'Morada do Sol', '56789012', 'Porto Alegre', 'RS'),
('Beatriz Martins', '67890123455', '961234567', 'Quadra 12', 130, 'Asa Sul', '67890123', 'Brasília', 'DF'),
('Felipe Rocha', '78901234566', '912345678', 'Rua da Harmonia', 82, 'Barra do Ceará', '78901234', 'Fortaleza', 'CE'),
('Júlia Lima', '89012345677', '945678901', 'Rua Nova', 500, 'Pina', '89012345', 'Recife', 'PE');

CREATE TABLE agencia(
id_agencia INT NOT NULL AUTO_INCREMENT,
nome_agencia VARCHAR(50),
PRIMARY KEY(id_agencia)
);

INSERT INTO agencia
(nome_agencia)
VALUES
('Campeche');
INSERT INTO agencia
(nome_agencia)
VALUES
('Ingleses');
INSERT INTO agencia
(nome_agencia)
VALUES
('Centro');

CREATE TABLE tipo_conta(
id_tipo_conta INT NOT NULL AUTO_INCREMENT,
des_tipo_conta VARCHAR(100),
PRIMARY KEY (id_tipo_conta)
);

INSERT INTO tipo_conta 
(des_tipo_conta) 
VALUES ('Corrente');
INSERT INTO tipo_conta 
(des_tipo_conta) 
VALUES 
('Poupança');

CREATE TABLE conta(
id_conta INT NOT NULL AUTO_INCREMENT,
valor_saldo_conta DECIMAL(8,2),
tipo_conta_id INT,
cliente_id INT,
agencia_id INT,
PRIMARY KEY (id_conta),
FOREIGN KEY (tipo_conta_id)
REFERENCES tipo_conta (id_tipo_conta),
FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente),
FOREIGN KEY (agencia_id)
REFERENCES agencia (id_agencia)
);

INSERT INTO conta 
(valor_saldo_conta, tipo_conta_id, cliente_id, agencia_id) 
VALUES
(1000.00, 1, 1, 1),
(5000.00, 2, 2, 2),
(2500.00, 1, 3, 3),
(1500.00, 2, 4, 1), 
(8000.00, 1, 5, 2), 
(1200.00, 2, 6, 3),  
(3000.00, 1, 7, 1),  
(4500.00, 2, 8, 2);  