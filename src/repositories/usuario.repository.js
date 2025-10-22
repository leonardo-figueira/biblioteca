import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
    )
`);

function createUsuarioRepository(novoUsuario) {
    return new Promise((resolve, reject) => {
        const { username, email, password } = novoUsuario;
        db.run(
            `
                INSERT INTO usuarios(username, email, password)
                values (?, ?, ?)
            `,
            [username, email, password],
            (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({id: this.lastID, ...novoUsuario});
                }
            }
        );
    });
}

function findUsuarioByEmailRepository(email) {
    return new Promise((resolve, reject) => {
        db.get(
            `
                SELECT 
                    id, username, email 
                FROM usuarios
                WHERE email = ?
            `,
            [email],
            (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            }                
        );
    });
}

export default {
    createUsuarioRepository,
    findUsuarioByEmailRepository
}