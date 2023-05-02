const express = require('express')
const router = express.Router()
const db = require('../server/db')

const { User } = require('../server/models')

router.get('/', (req, res) => {
  res.send('llegue a login')
})

// router.post('/', (req, res) => {
//   const { usuario, password } = req.body
//   User.findOne({
//     where: {
//       usuario: usuario
//     }
//     .then(user => {
//       if(!user) return res.send(401)
//       user.validatePassword(password)
//       .then(pw => {
//         if(!pw) return res.send(401)
//         else 
//       })
//     })
//   })
// })

module.exports = router; 