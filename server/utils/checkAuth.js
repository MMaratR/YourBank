import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

  if (token) {
    try {
      const decode = jwt.verify(token, 'secretkey')
      req.userEmail = decode.email
      next()
    } catch (err) {
      res.status(400).json({
        message: 'No access',
      })
    }
  } else {
    res.status(400).json({
      message: 'No access',
    })
  }
}