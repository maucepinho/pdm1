require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// --- CONEXÃO COM O POSTGRESQL ---
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
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
// Atualizado para incluir course_id
app.post('/students', async (req, res) => {
    const { name, matricula, course_id } = req.body; 
    try {
        const result = await pool.query(
            'INSERT INTO students (name, matricula, course_id) VALUES ($1, $2, $3) RETURNING *',
            [name, matricula, course_id]
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

// --- ROTAS PARA BOLETIM/NOTAS ---

// 1. Lançar Notas (Para popular o banco)
app.post('/grades', async (req, res) => {
    const { student_id, discipline_id, grade1, grade2 } = req.body;
    
    // Calcula a média simples
    const average = (parseFloat(grade1) + parseFloat(grade2)) / 2;

    try {
        const result = await pool.query(
            'INSERT INTO grades (student_id, discipline_id, grade1, grade2, average) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [student_id, discipline_id, grade1, grade2, average]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao lançar nota' });
    }
});

// 2. Consultar Boletim de um Aluno Específico
app.get('/students/:id/bulletin', async (req, res) => {
    const { id } = req.params;
    try {
        // Faz o JOIN entre Notas, Disciplinas e Professores para montar o boletim completo
        const result = await pool.query(`
            SELECT 
                d.name as discipline_name,
                t.name as teacher_name,
                g.grade1,
                g.grade2,
                g.average
            FROM grades g
            JOIN disciplines d ON g.discipline_id = d.id
            JOIN teachers t ON d.teacher_id = t.id
            WHERE g.student_id = $1
        `, [id]);
        
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar boletim' });
    }
});

// --- ROTAS PARA CURSOS ---

// 1. Listar Cursos
app.get('/courses', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses ORDER BY id ASC');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar cursos' });
    }
});

// 2. Cadastrar Curso
app.post('/courses', async (req, res) => {
    const { name, area, duration, coordinator } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO courses (name, area, duration, coordinator) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, area, duration, coordinator]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao cadastrar curso' });
    }
});

// 3. Atualizar/Editar Curso
app.put('/courses/:id', async (req, res) => {
    const { id } = req.params;
    const { name, area, duration, coordinator } = req.body;
    try {
        await pool.query(
            'UPDATE courses SET name=$1, area=$2, duration=$3, coordinator=$4 WHERE id=$5',
            [name, area, duration, coordinator, id]
        );
        res.status(200).json({ message: 'Curso atualizado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar curso' });
    }
});

// 4. Excluir Curso
app.delete('/courses/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM courses WHERE id = $1', [id]);
        res.status(200).json({ message: 'Curso excluído com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir (verifique se há alunos vinculados)' });
    }
}); 

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});