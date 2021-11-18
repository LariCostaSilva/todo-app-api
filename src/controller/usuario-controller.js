const Usuario = require('../model/Usuario')

const usuario = (app, bd) => {

  app.get('/usuario', (req, res) => {
    res.json({
      "usuarios": bd.usuario
    })
  })

  //recebendo um outro parâmetro
  app.get('/usuario/:nome', (req, res) => {
    //identificando ele
    const nome = req.params.nome
    res.json({
      "mensagem": "Rota ativada parametro", "parametro": nome
    })
  })

  //recebendo um outro parâmetro
  app.get('/usuario/:email', (req, res) => {
    //identificando ele
    const email = req.params.nome
    res.json({
      "mensagem": "Rota ativada parametro", "email": email,
    })
  })

  app.delete('/usuario/:email', (req, res) => {
    //código que deleta user
    for (let i = 0; i < bd.usuario.length; i++) {
      if(bd.usuario[i].email===email){
        bd.usuario.splice(i,1)
        res.json({
          erro: false,
          email: email,
        });
      }
    }

    res.json({
      erro: true,
      msg: "email passado como parâmetro deletado",
    });

    //acaba aqui
    const email = req.params.nome
    res.json({
      "mensagem": "Rota Delete ativada parametro", "email": email,
    })
  })

  app.post('/usuario', (req, res) => {
    try {
      const body = req.body
      const novoUsuario = new Usuario(body.nome, body.email, body.senha)

      bd.usuario.push(novoUsuario)
      console.log(bd.usuario)

      res.json({
        "requisicao": novoUsuario,
        "erro": false
      })
    }

    catch (error) {

      res.json({
        "mensager": error.message,
        "erro": true
      })
    }
  })
}

module.exports = usuario