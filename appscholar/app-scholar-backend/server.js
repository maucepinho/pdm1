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
    port: 5434,
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

// --- ROTAS PARA ALUNOS ---
app.post('/students', async (req, res) => {
    const { name, matricula, course } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO students (name, matricula, course) VALUES ($1, $2, $3) RETURNING *',
            [name, matricula, course]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao cadastrar aluno' });
    }
});

app.get('/students', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
});

// --- ROTAS PARA PROFESSORES ---
app.post('/teachers', async (req, res) => {
    const { name, titulation, teaching_years } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO teachers (name, titulation, teaching_years) VALUES ($1, $2, $3) RETURNING *',
            [name, titulation, teaching_years]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao cadastrar professor' });
    }
});

app.get('/teachers', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM teachers');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar professores' });
    }
});

// --- ROTAS PARA DISCIPLINAS ---
app.post('/disciplines', async (req, res) => {
    const { name, workload, teacher_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO disciplines (name, workload, teacher_id) VALUES ($1, $2, $3) RETURNING *',
            [name, workload, teacher_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao cadastrar disciplina' });
    }
});

app.get('/disciplines', async (req, res) => {
    try {
        // Busca a disciplina trazendo o nome do professor junto (JOIN)
        const result = await pool.query(`
            SELECT d.*, t.name as teacher_name 
            FROM disciplines d 
            LEFT JOIN teachers t ON d.teacher_id = t.id
        `);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar disciplinas' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});