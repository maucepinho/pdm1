# App Scholar - Sistema de Gestão Acadêmica Mobile

Aplicativo desenvolvido em **React Native (Expo)** com Back-end em **Node.js** e Banco de Dados **PostgreSQL** para gerenciamento de boletins acadêmicos, alunos, professores, disciplinas e cursos.

---

## 🚀 Tecnologias Utilizadas

- **Front-end:** React Native, Expo, React Navigation, Axios.
- **Back-end:** Node.js, Express, pg (node-postgres), cors, dotenv.
- **Banco de Dados:** PostgreSQL.

---

## 🛠️ Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) (e uma ferramenta de gestão como pgAdmin ou DBeaver)
- Aplicativo **Expo Go** no celular (ou emulador Android/iOS configurado).

---

## 🗄️ Configuração do Banco de Dados (Passo 1)

Antes de rodar a aplicação, é necessário criar o banco e as tabelas.

1. Abra seu gerenciador de banco de dados (pgAdmin/DBeaver).
2. Crie um banco de dados chamado `appscholar`.
3. Abra a ferramenta de consulta (Query Tool) **dentro deste banco** e execute o script abaixo completo:

```sql
-- 1. Tabela de Usuários (Login)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

-- 2. Tabela de Cursos (Necessária antes de alunos)
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  area VARCHAR(100) NOT NULL,
  duration INT NOT NULL,
  coordinator VARCHAR(100)
);

-- 3. Tabela de Alunos (Vinculada a Cursos)
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  matricula VARCHAR(50) UNIQUE NOT NULL,
  course_id INT REFERENCES courses(id)
);

-- 4. Tabela de Professores
CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  titulation VARCHAR(100) NOT NULL,
  teaching_years INT
);

-- 5. Tabela de Disciplinas (Vinculada a Professores)
CREATE TABLE disciplines (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  workload INT NOT NULL,
  teacher_id INT REFERENCES teachers(id)
);

-- 6. Tabela de Notas/Boletim (Vinculada a Alunos e Disciplinas)
CREATE TABLE grades (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  discipline_id INT REFERENCES disciplines(id),
  grade1 NUMERIC(4,2),
  grade2 NUMERIC(4,2),
  average NUMERIC(4,2)
);

-- === DADOS DE TESTE INICIAIS ===

-- Inserir Usuário Padrão
INSERT INTO users (name, email) VALUES ('Admin', 'admin@teste.com');

-- Inserir Curso Exemplo
INSERT INTO courses (name, area, duration, coordinator) 
VALUES ('Análise e Desenvolvimento de Sistemas', 'Tecnologia', 6, 'Prof. Coord. Silva');

-- Inserir Professor Exemplo
INSERT INTO teachers (name, titulation, teaching_years) 
VALUES ('Prof. Souza', 'Mestre', 10);

-- Inserir Disciplina Exemplo (Vinculada ao Prof ID 1)
INSERT INTO disciplines (name, workload, teacher_id) 
VALUES ('Programação Mobile', 80, 1);

-- Inserir Aluno Exemplo (Vinculado ao Curso ID 1)
INSERT INTO students (name, matricula, course_id) 
VALUES ('Aluno Teste', 'RA123456', 1);
```

---

## ⚙️ Configuração do Back-end (Passo 2)

1. Abra o terminal e navegue até a pasta do servidor:
   ```bash
   cd app-scholar-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo chamado `.env` na raiz da pasta `app-scholar-backend`.
   - Cole o conteúdo abaixo, **ajustando a senha e a porta conforme sua instalação do Postgres**:

   ```env
   DB_USER=postgres
   DB_HOST=localhost
   DB_DATABASE=appscholar
   DB_PASSWORD=sua_senha_aqui
   DB_PORT=5432
   PORT=3000
   ```
   *(Nota: Se você tiver mais de uma versão do Postgres, sua porta pode ser 5433 ou 5434. Verifique no pgAdmin).*

4. Inicie o servidor:
   ```bash
   node server.js
   ```
   *Deve aparecer a mensagem: "Servidor rodando em http://localhost:3000"*

---

## 📱 Configuração do Front-end (Passo 3)

1. Abra um **novo terminal** e navegue até a pasta do aplicativo:
   ```bash
   cd app-scholar-frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o Expo:
   ```bash
   npx expo start
   ```

4. Leia o QR Code com o app **Expo Go** (Android/iOS) ou pressione `a` para abrir no Emulador Android.

---

## ⚠️ Atenção sobre Conexão (IP vs Localhost)

Se você estiver rodando o aplicativo no **celular físico**, o app não conseguirá acessar o `localhost` do seu computador.

Nesse caso, você deve alterar todas as chamadas `axios` nos arquivos dentro de `src/screens/` para usar o IP da sua máquina na rede local:

**De:** `http://localhost:3000/...`  
**Para:** `http://192.168.X.X:3000/...`

Para descobrir seu IP:
- Windows: `ipconfig` no terminal.
- Mac/Linux: `ifconfig` no terminal.