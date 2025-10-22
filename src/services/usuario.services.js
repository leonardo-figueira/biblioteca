import usuarioRepository from "../repositories/usuario.repository.js";

async function createUsuarioService(novoUsuario) {
    const usuarioExistente = await usuarioRepository.findUsuarioByEmailRepository(novoUsuario.email);

    if (usuarioExistente) throw new Error("Um usuário com este e-mail já se encontra cadastrado.")

    const usuario = usuarioRepository.createUsuarioRepository(novoUsuario);
    return usuario;
}

export default {
    createUsuarioService
}