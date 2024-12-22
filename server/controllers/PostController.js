import { getDatabase } from "../database/database.js"

const db = getDatabase()

export const getAll = async (req, res) => {
  const sql = 'SELECT * FROM post'
  db.all(sql, [], async (err, rows) => {
    if (err) {
      console.error('Data base error', err.message);
    } else {
      // res.json({
      //   result: 'Success',
      //   row: rows,
      // })
      res.json(rows)
    }
  })
}

export const getOne = async (req, res) => {
  const postId = req.params.id
  const sql = 'SELECT * FROM post WHERE id = ?'
  db.get(sql, [postId], async (err, row) => {
    if (err) {
      return console.error('Data base error', err.message);
    } else if (row) {
      // res.json({
      //   result: 'Success',
      //   row: row,
      // });
      res.json(rows)
    } else {
      res.json({
        result: 'Post not found',
      });
    }
  })
}

export const create = async (req, res) => {
  const sql = 'INSERT INTO post (title, text, image) VALUES (?, ?, ?)'
  db.run(sql, [req.body.title, req.body.text, req.body.image], (err) => {
    if (err) {
      return res.status(400).json({
        message: 'Data base error'
      })
    } else {
      res.json({
        result: 'Success',
      })
    }
  })
}

export const remove = async (req, res) => {
  const postId = req.params.id
  const sql1 = 'SELECT * FROM post WHERE id = ?'
  db.get(sql1, [postId], async (err, row) => {
    if (err) {
      console.error('Data base error', err.message);
    } else if (row) {
      const sql2 = 'DELETE FROM post WHERE id = ?'
      db.run(sql2, [postId], async (err) => {
        if (err) {
          console.error('Data base error', err.message);
        } else {
          res.json({
            result: 'Success',
          })
        }
      })
    } else {
      res.json({
        result: 'Post not found'
      })
    }
  })
}

export const update = async (req, res) => {
  const postId = req.params.id
  const sql1 = 'SELECT * FROM post WHERE id = ?'
  db.get(sql1, [postId], async (err, row) => {
    if (err) {
      console.error('Data base error', err.message);
    } else if (row) {
      const sql2 = 'UPDATE post SET title = ?, text = ?, image = ? WHERE id = ?'
      db.run(sql2, [req.body.title, req.body.text, req.body.image, postId], (err) => {
        if (err) {
          console.error('Data base error', err.message);
        } else {
          res.json({
            result: 'Success',
          })
        }
      })
    } else {
      res.json({
        result: 'Post not found'
      })
    }
  })
}