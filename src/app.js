const express = require('express')
const app = express()
const port = 3000

//Controllers

const usuario= require('./controller/usuario-controller')
const tarefa = require('./controller/tarefa-controller')

//Middlewares 12-11

app.use(express.json())
app.use((req, res, next)=>{
  console.log("Teste do middleware")
  console.log(req.body)
  next()
})

//chamando as rotas

usuario(app)
tarefa (app)

app.listen(port, () => {
  console.log(`Servidor rodando: http://localhost:${port}`)
})

const novoUsuario = require('./model/Usuario')
