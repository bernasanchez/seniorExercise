const express = require('express')
const router = express.Router()
const db = require('../server/db')
const { User } = require('../server/models')

router.get('/', (req, res) => {
  // console.log(req.body)
  // const {usuario, edad, nacionalidad, email, password} = req.body
  // console.log('BODY', usuario, edad, nacionalidad, email, password)
  res.send('llegue a user')
})

router.post('/', (req, res) => {
  // const {usuario, edad, nacionalidad, email, password} = req.body
  User.create(req.body)
    .then(user => res.send(user))
    .catch(error => console.log(error))
})


module.exports = router; 