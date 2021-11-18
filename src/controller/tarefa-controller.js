const Tarefa = require('../model/Tarefa')

const tarefa = (app, bd) => {

  app.get('/tarefa', (req, res) => {
    res.json({
      "tarefas": bd.tarefa
    })
  })

  app.post('/tarefa', (req, res) => {
    try {
      const body = req.body
      const novaTarefa = new Tarefa(body.usuario, body.titulo, body.status)

      bd.tarefa.push(novaTarefa)
      console.log(bd.tarefa)
      res.json({
        "requisicao": novaTarefa,
        "erro": false
      })
    }

    catch (error) {
      res.json({
        "mensagem": error.message,
        "erro": true
      })
    }
  })
}

module.exports = tarefa