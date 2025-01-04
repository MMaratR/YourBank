import express from 'express'
import multer from 'multer'
import cors from 'cors'

import { registerValidation, loginValidation, postCreateValidation } from './validations/validations.js'
import { register, login, getme } from './controllers/UserController.js'
import { getAll, getOne, create, remove, update } from './controllers/PostController.js'
import checkAuth from './utils/checkAuth.js'
import validationErrors from './utils/validationErrors.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads')
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

app.post('/register', registerValidation, validationErrors, register)
app.post('/login', loginValidation, validationErrors, login)
app.get('/me', checkAuth, getme)

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    result: 'Success',
  })
})

app.get('/posts', getAll)
app.get('/posts/:id', getOne)
app.post('/posts', checkAuth, postCreateValidation, validationErrors, create)
app.delete('/posts/:id', checkAuth, remove)
app.patch('/posts/:id', checkAuth, postCreateValidation, validationErrors, update)

app.listen(4444, (err) => {
  if (err) {
    return console.error('Server error:', err.message);
  }
  console.log('Server OK')
})