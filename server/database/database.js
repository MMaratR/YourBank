import sqlite from 'sqlite3'

const db = new sqlite.Database('./database/data_base.db', (err) => {
  if (err) {
    console.error('Data base error:', err.message)
  } else {
    try {
      const sql1 = 'CREATE TABLE IF NOT EXISTS account (id	INTEGER UNIQUE PRIMARY KEY AUTOINCREMENT, email	TEXT UNIQUE, password TEXT)'
      db.run(sql1, (err) => {
        if (err) {
          return console.error('Data base error', err.message);
        }
      })

      const sql2 = 'CREATE TABLE IF NOT EXISTS post (id	INTEGER UNIQUE PRIMARY KEY AUTOINCREMENT, title	TEXT, text TEXT, image TEXT)'
      db.run(sql2, (err) => {
        if (err) {
          return console.error('Data base error', err.message);
        }
      })

      console.log('Data base OK')
    } catch (err) {
      console.error('Data base error', err.message);
    }
  }
})

export const getDatabase = () => {
  return db
}