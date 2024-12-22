import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { getDatabase } from '../database/database.js'


const db = getDatabase()

export const register = async (req, res) => {
  const password = req.body.password
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)

  const sql = 'INSERT INTO account (email, password) VALUES (?, ?)'
  db.run(sql, [req.body.email, passwordHash], (err) => {
    if (err) {
      res.status(400).json({
        register: 'Faild',
        message: 'User found'
      })
    } else {

      const token = jwt.sign({
        email: req.body.email
      }, 'secretkey', {
        expiresIn: '30d',
      })

      res.json({
        register: 'Success',
        token: token,
      })
    }
  })
}

export const login = (req, res) => {

  const sql = 'SELECT * FROM account WHERE email = ?'
  db.get(sql, [req.body.email], async (err, row) => {
    if (err) {
      console.error('Data base error', err.message);
    } else if (row) {
      const isValidPass = await bcrypt.compare(req.body.password, row.password)
      if (isValidPass) {

        const token = jwt.sign({
          email: req.body.email
        }, 'secretkey', {
          expiresIn: '30d',
        })

        res.json({
          login: 'Success',
          token: token,
        });
      } else {
        res.status(400).json({
          message: 'Incorrect email or password'
        })
      }
    } else {
      res.status(400).json({
        message: 'Incorrect email or password'
      })
    }
  })

}

export const getme = (req, res) => {
  const sql = 'SELECT * FROM account WHERE email = ?'
  db.get(sql, [req.userEmail], async (err, row) => {
    if (err) {
      console.error('Data base error', err.message);
    } else if (row) {
      res.json({
        result: 'Success',
        row: row,
      });
    } else {
      res.status(400).json({
        message: 'User not found'
      })
    }
  })
}