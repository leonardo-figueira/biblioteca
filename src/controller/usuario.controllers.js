import usuarioServices from "../services/usuario.services.js";

async function createUsuarioController(req, res) {
    const novoUsuario = req.body;

    try {
        const usuario = await usuarioServices.createUsuarioService(novoUsuario);
        res.status(201).send({usuario});
    } catch (err) {
        res.status(400).send(err.message)
    }
}

export default {
    createUsuarioController
}
