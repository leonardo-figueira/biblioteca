import usuarioServices from "../services/usuario.services.js";

async function createUsuarioController(req, res) {
    const novoUsuario = req.body;

    try {
        const usuario = usuarioServices.createUsuarioService(novoUsuario);
        res.status(201).send({usuario});
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

export default {
    createUsuarioController
}
