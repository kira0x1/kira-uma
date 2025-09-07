import Database from 'better-sqlite3'
const db = new Database('uma.db')
db.pragma('journal_mode = WAL');

class DbController {
    static initDB() {
        db.exec(
            `CREATE TABLE horses (
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL
                )`
        )

        db.close();
    }
}

export default DbController