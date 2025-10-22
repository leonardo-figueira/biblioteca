import usuarioRepository from "../repositories/usuario.repository.js";

async function createUsuarioService(novoUsuario) {
    const usuario = usuarioRepository.createUsuarioRepository(novoUsuario);
    return usuario;
}

export default {
    createUsuarioService
}