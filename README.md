
# 🧾 Lista de Itens - API com Express.js

Uma API simples desenvolvida com **Node.js** e **Express.js** para cadastro e consulta de itens, com suporte a filtro por tipo e busca por ID.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [http-status](https://www.npmjs.com/package/http-status)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

O servidor estará rodando em `http://localhost:5000`.

---

## 📌 Endpoints

### ➕ POST `/items`

Adiciona um novo item à lista.

#### Request Body:
```json
{
  "name": "Arroz",
  "quantity": 2,
  "type": "alimento"
}
```

#### Respostas:
- `201 Created`: item criado com sucesso.
- `409 Conflict`: item com mesmo nome já cadastrado.
- `422 Unprocessable Entity`: campos obrigatórios não preenchidos.

---

### 📋 GET `/items`

Retorna todos os itens cadastrados.

#### Parâmetros opcionais:
- `type` (query): filtra os itens por tipo.

**Exemplo:**
```
GET /items?type=alimento
```

#### Resposta:
- `200 OK`: lista de itens.

---

### 🔍 GET `/items/:id`

Retorna um item específico pelo seu ID.

#### Parâmetro:
- `id` (path): ID do item.

#### Respostas:
- `200 OK`: item encontrado.
- `400 Bad Request`: ID inválido.
- `404 Not Found`: item não encontrado.

---

## 🛠️ Funcionalidades

- Cadastro de itens com nome, quantidade e tipo.
- Evita duplicidade de nomes.
- Filtro por tipo.
- Busca de item por ID.

---
