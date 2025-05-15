import express, { json } from "express";
import cors from "cors"

const server = express();

server.use(cors());
server.use(json());

server.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});

const lista = [];

server.post('/items', (req, res) => {
  const {name, quantity, type} = req.body;
  if (!name || !quantity || !type)  return res.status(422).send('Preencha todos os campos! (name, quantity e type)');
  const itemExistente = lista.find(item => item.name === name);
  if (itemExistente) return res.status(409).send('Item já cadastrado');
  const novoItem = {
    id : lista.length + 1,
    name,
    quantity,
    type
  }
  lista.push(novoItem);
  res.status(201).send(novoItem);
})

server.get('/items', (req, res) => {
  const { type } = req.query
  if (type) {
    const filtrados = lista.filter(item => item.type === type);
    res.send(filtrados);
  }
  res.send(lista);
})

server.get('/items/:id', (req, res) => {
  const { id } = req.params;
  if (id <= 0) return res.status(400).send('Id inválido!');
  const item = lista.find(item => item.id === Number(id));
  if (item) return res.send(item);
  else res.status(404).send('Id não encontrado!');
})