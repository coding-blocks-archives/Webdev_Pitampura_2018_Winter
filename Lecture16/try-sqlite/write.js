const sqlite = require('sqlite3')
const path = require('path')

const db = new sqlite.Database(path.join(__dirname, 'my.db'))

let x = `" OR `

db.serialize(() => {
  // db.run('DROP TABLE IF EXISTS tasks')
  db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, name TEXT);')

  db.run(
    `INSERT INTO tasks (?1) VALUES (?2)`,
    {
      1: 'name',
      2: x
    }
  )
})

db.close()
