// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// --- CONEXÃO COM O POSTGRESQL ---
// !!! ATENÇÃO: Substitua com suas credenciais !!!
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'appscholar',
    password: '123',
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// --- API 1: Autenticação de usuários ---
app.post('/login', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email é obrigatório' });
    }

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length > 0) {
            // Usuário encontrado, login bem-sucedido
            res.status(200).json(result.rows[0]);
        } else {
            // Usuário não encontrado
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});