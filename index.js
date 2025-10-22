import express from 'express';
import usuarioRouters from './src/routes/usario.routes.js'

const app = express();

app.use(express.json());
app.use(usuarioRouters);

app.get("/", (req, res) => {
    res.send('Hello World');
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

