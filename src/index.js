import express, { json } from "express";
import cors from "cors"
import status from "http-status";

const server = express();

server.use(cors());
server.use(json());

server.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});

const lista = [];

server.post('/items', (req, res) => {
  const {name, quantity, type} = req.body;
  if (!name || !quantity || !type)  return res.status(status.UNPROCESSABLE_ENTITY).send({ message: "Preencha todos os campos!" });
  const itemExistente = lista.find(item => item.name === name);
  if (itemExistente) return res.status(status.CONFLICT).send({ message: "Item já cadastrado" });
  const novoItem = {
    id : lista.length + 1,
    name,
    quantity,
    type
  }
  lista.push(novoItem);
  res.status(status.CREATED).send(novoItem);
})

server.get('/items', (req, res) => {
  const { type } = req.query
  if (type) {
    const filtrados = lista.filter(item => item.type === type);
    return res.status(status.OK).send(filtrados);
  }
  res.status(status.OK).send(lista);
})

server.get('/items/:id', (req, res) => {
  const { id } = req.params;
  if (id <= 0) return res.status(status.BAD_REQUEST).send({ message: 'Id inválido!' });
  const item = lista.find(item => item.id === Number(id));
  if (item) return res.status(status.OK).send(item);
  else res.status(status.NOT_FOUND).send({ message: 'Id não encontrado!' });
})