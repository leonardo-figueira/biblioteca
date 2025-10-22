import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('biblioteca_db.sqlite', (err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados',
            err.message
        );
    } else {
        console.log('Conectado ao banco de dados SQLite com sucesso.');
    }
});

export default db;