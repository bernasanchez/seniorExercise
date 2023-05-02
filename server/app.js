const express = require('express') //1 requrimos express
const app = express() //2 inicializamos el server
const db = require('./db') //3 requerimos la db
const routes = require('../routes')
const models = require('./models') //* 4 tenemos que requerir los models dsp de db para que pueda leerlos al momento de levantar el server

// app.get('/', (req, res) => {
//     res.send('llegue al puerto 3002')
// })
app.use(express.static('public')); //conecta el front con el servidor 
  
app.use(express.json()) //5 json para todos los req del body

app.use('/api', routes )

db.sync({force: false}).then(() => { //6 sincronizamos la db para escuchar cualquier cambio dentro del puerto que configuramos 
  app.listen(3002, () => {
    console.log('Levantando server en puerto 3002')
  })
})
.catch((err) => console.log(err));


