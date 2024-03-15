const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'Elnatacorrea',
    host: 'localhost',
    database: 'dados',
    password: 'alunofametro',
    port: 5432,
});

app.use(express.json());

app.post('/dados', async (req, res) => {
    const { nomeOrganizacao, enderecoOrganizacao, dataPreenchimento, topicosVeiculos } = req.body;

    try {
        // Insere os dados recebidos no banco de dados
        const result = await pool.query('INSERT INTO dados_coletados (nome_organizacao, endereco_organizacao, data_preenchimento, topicos_veiculos) VALUES ($1, $2, $3, $4) RETURNING id', [nomeOrganizacao, enderecoOrganizacao, dataPreenchimento, topicosVeiculos]);
        const dadosId = result.rows[0].id;

        res.json({ success: true, dadosId });
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        res.status(500).json({ success: false, message: 'Erro ao inserir dados' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
