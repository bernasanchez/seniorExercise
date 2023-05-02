const Sequelize  = require("sequelize")
const db = require('../db'); 
const bcrypt = require('bcrypt'); 

// console.log('llegando a User')
class User extends Sequelize.Model {

  hash(password, salt){
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hash(password, this.salt)
    .then((newHash) => newHash === this.password);
  }
}

User.init({
  usuario: {
    type: Sequelize.STRING,
    allowNull: false
  },
  edad: {
    type: Sequelize.INTEGER,
    allowNull: false
  }, 
  nacionalidad: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }

}, {sequelize: db, modelName: 'user'}) //Poner en plural en psql sino no encuentra la base de datos! 
//!CONSULTAR ESTO

User.addHook('beforeCreate', (user) => {
  user.salt = bcrypt.genSaltSync() //1 generamos un salt
  return user.hash(user.password, user.salt)  //2 retornamos una funcion hash del usuario con 1 passw y un salt
    .then((hash) => user.password = hash) //devuelve una promesa y le ponemos a la prop user.pasword el hash creado 
    .catch(err => console.log(err)) 
})

module.exports = User; 