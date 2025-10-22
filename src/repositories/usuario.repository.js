import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    )
`);

function createUsuarioRepository(novoUsuario) {
    return new Promise((res, rej) => {
        const { username, email, paswword } = novoUsuario;

        `
            INSERT INTO usuarios(username, email, password)
            values (?, ?, ?, ?)
        `,
        [username, email, paswword],
        (err) => {
            if (err) {
                rej(err);
            } else {
                res({message: "Usuário criado."});
            }
        }
    });
}

export default {
    createUsuarioRepository
}