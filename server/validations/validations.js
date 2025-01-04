import { body } from 'express-validator'

export const registerValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'The password is at least 6 characters long').isLength({ min: 6 }),
]

export const loginValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'The password is at least 6 characters long').isLength({ min: 6 }),
]

export const postCreateValidation = [
  body('title', 'Enter the title of the article').isLength({ min: 3 }).isString(),
  body('text', 'Enter the text of the article').isLength({ min: 10 }).isString(),
  body('image', 'The link to the image is incorrect').optional().isString(),
]