-- Tabela para armazenar os dados coletados
CREATE TABLE dados_coletados (
    id SERIAL PRIMARY KEY,
    nome_organizacao VARCHAR(255),
    endereco_organizacao VARCHAR(255),
    data_preenchimento DATE,
    topicos_veiculos TEXT[]
);

-- Tabela para armazenar o resultado do cálculo Ifonte individual
CREATE TABLE ifonte_individual (
    id SERIAL PRIMARY KEY,
    id_dados_coletados INTEGER REFERENCES dados_coletados(id),
    ifonte_value FLOAT
);
