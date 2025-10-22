import express from 'express';

const app = express();

app.use(express.json());

let usuarios = [];

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.post("/usuarios", (req, res) => {
    console.log(req);
    const body = req.body;
    usuarios.push(body);
    res.status(201).send("Usuário criado com sucesso");
});

app.get("/usuarios", (req, res) => {
    console.log(req);
    res.send({usuarios});
});

// METHOD => GET, POST, PUT/PATCH, DELETE
// GET       para listar
// POST      para salvar
// PUT/PATCH para editar
// DELETE    para deletar
// NAME =>   / Nome da rota sempre no plural
// Callback functions => Onde executamos todo o nosso backend(lógica, regra de negócio)

app.listen(3000, () => {
    console.log("Servidor rodando localmente na porta 3000.");
});

